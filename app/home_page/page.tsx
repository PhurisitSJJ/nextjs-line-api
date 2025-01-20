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
                liff.login(); // Redirect to LINE login if not logged in
            } else {
                const userProfile = await liff.getProfile();
                setProfile(userProfile);
            }
        } catch (e) {
            console.error('Error during login', e);
        }
    };

    return (
        <Container>
            {profile ? (
                <Box textAlign="center" mt={4}>
                    <Avatar
                        src={profile.pictureUrl || ''}
                        alt={profile.displayName}
                        sx={{ width: 400, height: 400, margin: '0 auto', borderRadius: 0 }} // รูปสี่เหลี่ยม
                    />
                    <Typography variant="h5" mt={2}>
                        {profile.displayName}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mt={1}>
                        {profile.statusMessage || 'No status message'}
                    </Typography>
                </Box>
            ) : (
                <Typography variant="h6" textAlign="center" mt={4}>
                    กำลังโหลดข้อมูล...
                </Typography>
            )}
        </Container>
    );
};

export default LinePage;
