'use client';

import MemberNavbar from '@/app/utils/components/MemberNavber'
import { Avatar, Box, Container, Typography, } from '@mui/material';
import { useEffect, useState } from 'react';
import liff from '@line/liff';

interface Profile {
    userId: string;
    displayName: string;
    statusMessage?: string;
    pictureUrl?: string;
}

const LinePage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [idToken, setIdToken] = useState<string | null>(null); // เก็บ IdToken

    useEffect(() => {
        try {
            initLine();
        } catch (err) {
            console.log("Error: ", err)
        }
    }, []);

    const initLine = async () => {
        if (liff.id === null) {
            liff.ready.then(() => {
                checkSession();  // ตรวจสอบ session เมื่อเริ่มต้น
            })
            setTimeout(() => {
                checkSession();  // ตรวจสอบ session เมื่อเริ่มต้น
            }, 1000)
            liff.init({ liffId: '2006781477-NzeKaxpL' });
        } else {
            checkSession();

        }
    }

    // // ฟังก์ชันตรวจสอบ session
    const checkSession = async () => {
        if (!liff.isLoggedIn()) {
            console.log('User is not logged in.');
            // liff.login(); // ถ้าไม่ได้เข้าสู่ระบบ ให้เรียก login
        } else {
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
            <Container sx={{ mt: 4 }}>
                
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
