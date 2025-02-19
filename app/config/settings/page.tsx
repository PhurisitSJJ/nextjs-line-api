'use client';

import { Container } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";

const OrdersPage = () => {

    return (
        <>
            <MemberNavbar />
            <Container
                maxWidth="xs"
                sx={{
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'top',
                    height: '100vh',
                    px: 2,
                }}>
                    ตั้งค่า
            </Container>
        </>
    );
};

export default OrdersPage;