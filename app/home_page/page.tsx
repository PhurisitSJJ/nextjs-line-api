'use client';

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { Container, Typography, Avatar, Box } from '@mui/material';

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
        liff.init({ liffId: '2006781477-NzeKaxpL' })
            .then(() => {
                handleLogin();
            })
            .catch((err) => {
                console.error('LIFF initialization failed', err);
            });
    }, []);

    const handleLogin = async () => {
        try {
            if (!liff.isLoggedIn()) {
                liff.login(); 
            } else {
                const userProfile = await liff.getProfile();
                setProfile(userProfile);

                const token = liff.getIDToken(); 
                setIdToken(token);

                console.log('User Profile:', userProfile);
                console.log('IdToken:', token); 
            }
        } catch (e) {
            console.error('Error during login or profile retrieval:', e);
        }
    };

    return (
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
