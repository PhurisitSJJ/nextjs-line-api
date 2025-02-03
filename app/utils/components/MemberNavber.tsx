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
                <Toolbar>
                    {/* ชื่อระบบ หรือข้อความใน Navbar */}
                    <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                        ระบบสมาชิก
                    </Typography>

                    {/* ปุ่ม Logout */}
                    <Box>
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MemberNavbar;
