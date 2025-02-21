


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
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = (path: string) => {
        router.push(path);
        setDrawerOpen(false);
    };

    const handleLogout = () => {
        liff.logout();
        router.push('/');
    };

    const handleHomePage = () => {
        router.push('/homepage');
    };

    const menuItems = [
        { label: "หน้าหลัก", path: "/homepage" },
        { label: "สมาชิก", path: "/member" },
        { label: "บัญชี", path: "/profile" },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFF', borderBottom: '2px solid #BF0005'}}>
            <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between'}}>

                {isMobile ? (
                    <>
                        <Box sx={{ display: 'flex', alignItems: 'left', gap: 2 }}>
                            <IconButton edge="start"  onClick={() => setDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Image src="/assets/logo/nim.png" alt="Logo" width={70} height={40} onClick={handleHomePage}/>
                        </Box>

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
                                                '&:hover': { bgcolor: '#BF0005', color: 'white' },
                                                transition: '0.3s',
                                            }}
                                        >
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ sx: { fontFamily: 'Anuphan', textAlign: 'left' } }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>

                            <Divider />
                            <Box sx={{ p: 1, textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleLogout}
                                    sx={{
                                        width: '100%',
                                        fontFamily: 'Anuphan',
                                        backgroundColor: "#BF0005",
                                        "&:hover": { backgroundColor: "#D53F44", },
                                    }}
                                    startIcon={<LogoutIcon />}
                                >
                                    ออกจากระบบ
                                </Button>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Image src="/assets/logo/nim.png" alt="Logo" width={70} height={40} />

                        {menuItems.map((item) => (
                            <Typography
                                key={item.path}
                                component="p"
                                sx={{
                                    fontSize: '16px',
                                    fontFamily: 'Anuphan',
                                    color: '#000',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    '&:hover': {
                                        color: '#BF0005',
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

                {!isMobile && (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{
                            fontFamily: 'Anuphan',
                            backgroundColor: "#BF0005",
                            "&:hover": { backgroundColor: "#D53F44", },
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
