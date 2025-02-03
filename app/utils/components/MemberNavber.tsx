import liff from '@line/liff';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import * as React from 'react';


const MemberNavbar: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        liff.logout();
        window.location.href = '/login_page';
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between' }}>
                
                <Box sx={{ display: 'flex', gap: 4 }}>
                    <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer'}} onClick={() => router.push('/home_page')}>
                        หน้าหลัก
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }} onClick={() => router.push('/search_page')}>
                        ค้นหา
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }} onClick={() => router.push('/list_page')}>
                        รายการข้อมูล
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }} onClick={() => router.push('/add_page')}>
                        เพิ่มข้อมูล
                    </Typography>
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
