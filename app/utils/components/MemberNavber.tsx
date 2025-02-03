import liff from '@line/liff';
import { AppBar, Toolbar, Container, Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from 'react';

const MemberNavbar: React.FC = () => {
    const handleLogout = () => {
        liff.logout();
        window.location.href = '/login_page';
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }}>
                            หน้าหลัก
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }}>
                            ค้นหา
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }}>
                            รายการข้อมูล
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }}>
                            สรุปข้อมูล
                        </Typography>
                    </Box>

                    {/* ปุ่ม Logout ด้านขวา */}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{
                            backgroundColor: 'red',
                            color: 'white',
                            '&:hover': { backgroundColor: '#ff4d4d' },
                        }}
                        startIcon={<LogoutIcon />}
                    >
                        ออกจากระบบ
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MemberNavbar;
