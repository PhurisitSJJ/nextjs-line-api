'use client';

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { Container, Typography, Avatar, Box, Button, } from '@mui/material';

interface Profile {
    userId: string;
    displayName: string;
    statusMessage?: string;
    pictureUrl?: string;
}

const LinePage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [idToken, setIdToken] = useState<string | null>(null); // เก็บ IdToken
    const [tracking, setTracking] = useState<string>("Initial");

    useEffect(() => {
        setTracking("UseEffect: " + JSON.stringify(liff));
        try{
            setTracking("LoggedIn: " + liff.id);
            initLine();
            // checkSession();
        }catch(err){
            setTracking("LoggedIn Err: " + JSON.stringify(err))
        }
    }, []);

    const initLine = async () => {
        setTracking("initLine: " + liff.isInClient());
        if(liff.id === null){
            await liff.init({ liffId: '2006781477-NzeKaxpL' });
        }else{
            checkSession();
        }
    }

    useEffect(() => {
        setTracking("liff useEffect: " + liff.id);
        // if(liff.id === null){
        //     liff.init({ liffId: '2006781477-NzeKaxpL' })
        //         .then(() => {
        //             setTracking("liff Init Then");
        //             checkSession();  // ตรวจสอบ session เมื่อเริ่มต้น
        //         })
        // }
        initLine();
    }, [liff])

    const onRefreshHandler = () => {
        try{
            setTracking("onRefreshHandler Process")
            // liff.init({ liffId: '2006781477-NzeKaxpL' })
            //     .then(() => {
            //         setTracking("liff Init Then");
            //         checkSession();  // ตรวจสอบ session เมื่อเริ่มต้น
            //         setTracking("onRefreshHandler Success")
            //     })
            // checkSession();
            initLine();
        }catch(err){
            setTracking("onRefreshHandler Err: " + JSON.stringify(err));
        }
    }

    // ฟังก์ชันตรวจสอบ session
    const checkSession = async () => {
        if (!liff.isLoggedIn()) {
            console.log('User is not logged in.');
            setTracking("LoggedIn fail")
            liff.login(); // ถ้าไม่ได้เข้าสู่ระบบ ให้เรียก login
        } else {
            setTracking("LoggedIn Success")
            try {
                const userProfile = await liff.getProfile();
                setProfile(userProfile);

                const token = liff.getIDToken(); // ดึง IdToken
                setIdToken(token);

                console.log('User Profile:', userProfile);
                console.log('IdToken:', token); // แสดง IdToken
                setTracking("User profile setup: " + JSON.stringify(liff));
            } catch (e) {
                console.error('Error during profile retrieval:', e);
                setTracking("Error: ");
            }
        }
    };

    // ฟังก์ชัน logout
    const handleLogout = () => {
        liff.logout(); // ทำการ logout
        setProfile(null); // รีเซ็ตข้อมูล profile
        setIdToken(null); // รีเซ็ต IdToken
        console.log('User logged out');
        liff.login(); // เรียก login ใหม่
    };

    return (
        <Container>
            <Box>Tracking State: {tracking}</Box>
            <Box>
                <Button variant="contained" color="secondary" onClick={onRefreshHandler}>
                    Refresh
                </Button>
            </Box>
            {profile ? (
                <Box textAlign="center" mt={4}>
                    <Typography variant="h5" mt={2}>
                        บัญชีผู้ใช้ที่เข้าสู่ระบบด้วย Line
                    </Typography>
                    <Avatar
                        src={profile.pictureUrl || ''}
                        alt={profile.displayName}
                        sx={{
                            width: 200,
                            height: 200,
                            margin: '0 auto',
                            borderRadius: 0, 
                        }}
                    />
                    <Typography variant="h5" mt={2}>
                        ชื่อผู้ใช้ : {profile.displayName}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mt={1}>
                        ข้อความ : {profile.statusMessage || 'No status message'}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        mt={2}
                        sx={{
                            wordWrap: 'break-word', 
                            whiteSpace: 'pre-wrap', 
                            maxWidth: '80%', 
                            margin: '0 auto', 
                        }}
                    >
                        IdToken : {idToken || 'ไม่พบ IdToken'}
                    </Typography>

                    {/* ปุ่ม Logout */}
                    <Box mt={4}>
                        <Button variant="contained" color="secondary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Typography variant="h6" textAlign="center" mt={4}>
                    เข้าสู่ระบบแล้ว กำลังโหลดข้อมูล...
                </Typography>
            )}
        </Container>
    );
};

export default LinePage;
