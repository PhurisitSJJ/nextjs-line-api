import liff from '@line/liff';
import { AppBar, Container, Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from 'react';


const MemberNavvbar: React.FC = () => {
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleLogout = () => {
        liff.logout(); 
        window.location.href = '/login_page';
    };

    return (
        <AppBar position="static">
            <Container>
                <Box sx={{ flexGrow: 0 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleLogout}
                            sx={{
                                backgroundColor: 'red',
                                color: 'white',
                                '&:hover': { backgroundColor: '#ff4d4d' },
                            }}
                            startIcon={<LogoutIcon />} // เพิ่มไอคอนในปุ่ม
                        >
                            ออกจากระบบ
                        </Button>
                    </Box>
            </Container>
        </AppBar>
    );
};

export default MemberNavvbar;