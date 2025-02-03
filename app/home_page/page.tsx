'use client';

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { Container, Typography, Avatar, Box } from '@mui/material';
import MemberNavbar from '@/app/utils/components/MemberNavber'

interface Profile {
    userId: string;
    displayName: string;
    statusMessage?: string;
    pictureUrl?: string;
}

const LinePage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [idToken, setIdToken] = useState<string | null>(null); // เก็บ IdToken
    // const [tracking, setTracking] = useState<string>("Initial");

    useEffect(() => {
        // setTracking("UseEffect: " + JSON.stringify(liff));
        try {
            // setTracking("LoggedIn: " + liff.id);
            initLine();
            // checkSession();
        } catch (err) {
            console.log("Error: ", err)
            // setTracking("LoggedIn Err: " + JSON.stringify(err))
        }
    }, []);

    const initLine = async () => {
        // setTracking("initLine: ");
        if (liff.id === null) {
            liff.ready.then(() => {
                // setTracking("liff ready Then: " + JSON.stringify(liff));
                checkSession();  // ตรวจสอบ session เมื่อเริ่มต้น
            })
            setTimeout(() => {
                checkSession();  // ตรวจสอบ session เมื่อเริ่มต้น
                // setTracking("liff Timeout: " + JSON.stringify(liff));
            }, 1000)
            liff.init({ liffId: '2006781477-NzeKaxpL' });
        } else {
            checkSession();

        }
    }

    // ฟังก์ชันตรวจสอบ session
    const checkSession = async () => {
        if (!liff.isLoggedIn()) {
            console.log('User is not logged in.');
            // setTracking("LoggedIn fail")
            liff.login(); // ถ้าไม่ได้เข้าสู่ระบบ ให้เรียก login
        } else {
            // setTracking("LoggedIn Success")
            try {
                const userProfile = await liff.getProfile();
                setProfile(userProfile);

                const token = liff.getIDToken(); // ดึง IdToken
                setIdToken(token);

                console.log('User Profile:', userProfile);
                console.log('IdToken:', token); // แสดง IdToken
            } catch (e) {
                console.error('Error during profile retrieval:', e);
            }
        }
    };

    return (
        <>
            <MemberNavbar />
            <Container>

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
                            }} />
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
                    </Box>
                ) : (
                    <Typography variant="h6" textAlign="center" mt={4}>
                        กำลังโหลดข้อมูล...
                    </Typography>
                )}
            </Container></>
    );
};

export default LinePage;
