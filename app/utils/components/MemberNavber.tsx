import liff from '@line/liff';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import * as React from 'react';

const MemberNavbar: React.FC = () => {
    const router = useRouter();
    // const [selectedMenu, setSelectedMenu] = React.useState<string>("/home_page"); // เก็บค่าหน้าปัจจุบัน

    const handleMenuClick = (path: string) => {
        // setSelectedMenu(path);
        router.push(path);
    };

    const handleLogout = () => {
        liff.logout();
        window.location.href = '/login_page';
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between' }}>
                
                <Box sx={{ display: 'flex', gap: 4 }}>
                    {[
                        { label: "หน้าหลัก", path: "/home_page" },
                        { label: "ค้นหา", path: "/search_page" },
                        { label: "รายการข้อมูล", path: "/list_page" },
                        { label: "เพิ่มข้อมูล", path: "/add_page" }
                    ].map((item) => (
                        <Typography
                            key={item.path}
                            variant="h6"
                            sx={{
                                color: 'white', 
                                cursor: 'pointer',
                                transition: '0.3s',
                                '&:hover': {
                                    color: '#ffcc00', // เปลี่ยนเป็นสีทองเมื่อ hover
                                    transform: 'scale(1.1)', // ขยายเล็กน้อย
                                },
                            }}
                            onClick={() => handleMenuClick(item.path)}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Box>

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
        </AppBar>
    );
};

export default MemberNavbar;
