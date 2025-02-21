'use client';

import { Container, Typography, List, ListItemButton, ListItemText, Divider } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { useRouter } from "next/navigation";
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';


const OrdersPage = () => {
    const router = useRouter();

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
            <Container
                maxWidth="xs"
                sx={{
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    px: 2,
                }}>
                <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                    ตั้งค่า
                </Typography>
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
