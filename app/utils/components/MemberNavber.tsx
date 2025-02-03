import liff from '@line/liff';
import { AppBar, Toolbar, Box, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const MemberNavbar: React.FC = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const isMobile = useMediaQuery('(max-width:768px)'); ตัวอย่างถ้าเรากำหนดเอง
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = (path: string) => {
        router.push(path);
        setDrawerOpen(false);
    };

    const handleLogout = () => {
        liff.logout();
        window.location.href = '/login_page';
    };

    const menuItems = [
        { label: "หน้าหลัก", path: "/home_page" },
        { label: "ค้นหา", path: "/search_page" },
        { label: "รายการข้อมูล", path: "/list_page" },
        { label: "เพิ่มข้อมูล", path: "/add_page" }
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between' }}>

                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, bgcolor: 'white' }}>
                                <Image src="/assets/logo/nim.png" alt="Logo" width={150} height={100} />
                            </Box>
                            <Divider />
                            <List sx={{ width: 250 }}>
                                {menuItems.map((item) => (
                                    <ListItem disablePadding key={item.path}>
                                        <ListItemButton
                                            onClick={() => handleMenuClick(item.path)}
                                            sx={{
                                                '&:hover': { bgcolor: '#1976d2', color: 'white' },
                                                transition: '0.3s',
                                            }}
                                        >
                                            <ListItemText primary={item.label} sx={{ textAlign: 'left', fontWeight: 'bold' }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Image src="/assets/logo/nim.png" alt="Logo" width={100} height={50} />

                        {/* เมนูรายการ */}
                        {menuItems.map((item) => (
                            <Typography
                                key={item.path}
                                variant="h6"
                                alignItems='left'
                                sx={{
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    '&:hover': {
                                        color: '#ffcc00',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                onClick={() => handleMenuClick(item.path)}
                            >
                                {item.label}
                            </Typography>
                        ))}
                    </Box>
                )}

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
