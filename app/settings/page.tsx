'use client';

import { Container, Typography, List, ListItemButton, ListItemText, Divider, Box, Button } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";


const OrdersPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/config');
    }

    const handleOpenProfilePage = () => {
        router.push('/settings/profile')
    }

    const handleOpenLanguagePage = () => {
        router.push('/settings/language')
    }

    const handleOpenTermsPage = () => {
        router.push('/settings/terms')
    }


    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', height: '100vh', px: 2, }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBack}
                        sx={{
                            color: "#BF0005",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            "&:hover": { color: "#2200FF"},
                            "&:hover .MuiTypography-root": { color: "#2200FF" },
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "#BF0005", fontSize: "16px", fontFamily: 'Anuphan', }}>
                            ย้อนกลับ
                        </Typography>
                    </Button>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                       / ตั้งค่า
                    </Typography>
                </Box>
                <List >
                    <ListItemButton onClick={handleOpenProfilePage}>
                        <ListItemText>
                            <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                จัดการบัญชี
                            </Typography>
                        </ListItemText>
                        <ArrowIcon sx={{ color: "#6B6B6B", fontSize: "16px" }} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={handleOpenLanguagePage}>
                        <ListItemText>
                            <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                ภาษา
                            </Typography>
                        </ListItemText>
                        <ArrowIcon sx={{ color: "#6B6B6B", fontSize: "16px" }} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={handleOpenTermsPage}>
                        <ListItemText>
                            <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                ข้อกำหนดและเงื่อนไขการบริการ
                            </Typography>
                        </ListItemText>
                        <ArrowIcon sx={{ color: "#6B6B6B", fontSize: "16px" }} />
                    </ListItemButton>
                </List>
            </Container>
        </>
    );
};

export default OrdersPage;
