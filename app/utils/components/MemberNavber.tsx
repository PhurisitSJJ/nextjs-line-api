import { 
    AppBar, Toolbar, Box, Button, Typography, IconButton, Drawer, 
    List, ListItem, ListItemText, ListItemButton, Divider 
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import liff from '@line/liff';
import Image from 'next/image';

const MemberNavbar = () => {
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
        router.push('/');
    };

    const menuItems = [
        { label: "หน้าหลัก", path: "/home" },
        { label: "ค้นหา", path: "/search" },
        { label: "รายการข้อมูล", path: "/list" },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#BF0005' }}>
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
                        <Image src="/assets/logo/nim.png" alt="Logo" width={70} height={40} />

                        {/* เมนูรายการ */}
                        {menuItems.map((item) => (
                            <Typography
                                key={item.path}
                                component="p"
                                sx={{
                                    fontSize: '16px',
                                    // fontWeight: 'bold',
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

                {isMobile ? (
                    <IconButton edge="end" color="inherit" onClick={handleLogout}>
                        <LogoutIcon/>
                    </IconButton>
                ) : (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{
                            color: 'white',
                            '&:hover': { backgroundColor: '#ff4d4d' },
                        }}
                        startIcon={<LogoutIcon />}
                    >
                        ออกจากระบบ
                    </Button>
                )}

            </Toolbar>
        </AppBar>
    );
};

export default MemberNavbar;
