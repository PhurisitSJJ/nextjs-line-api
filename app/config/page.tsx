'use client';

import { Button, Container } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { useRouter } from 'next/navigation';


const SettingsPage = () => {
    const router = useRouter();

    const handleOpenAddressSender = () => {
        router.push('/delivery/address_sender');
    }

    const handleOpenAddressReceiver = () => {
        router.push('/delivery/address_receiver');
    }

    const handleOpenAddOrders = () => {
        router.push('/delivery/product');
    }

    const handleOpenSettings = () => {
        router.push('/settings');
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
                    justifyContent: 'top',
                    height: '100vh',
                    px: 2,
                }}>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "70px",
                        borderRadius: "8px",
                        color: "#BF0005",
                        backgroundColor: "#FFF",
                        fontFamily: "Anuphan",
                        border: "1px solid #BF0005",
                        "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                    }}
                    onClick={handleOpenAddressSender}
                >
                    กำหนดข้อมูลผู้ส่ง
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2,
                        width: "100%",
                        maxWidth: "400px",
                        height: "70px",
                        borderRadius: "8px",
                        color: "#BF0005",
                        backgroundColor: "#FFF",
                        fontFamily: "Anuphan",
                        border: "1px solid #BF0005",
                        "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                    }}
                    onClick={handleOpenAddressReceiver}
                >
                    กำหนดข้อมูลผู้รับ
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2,
                        width: "100%",
                        maxWidth: "400px",
                        height: "70px",
                        borderRadius: "8px",
                        color: "#BF0005",
                        backgroundColor: "#FFF",
                        fontFamily: "Anuphan",
                        border: "1px solid #BF0005",
                        "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                    }}
                    onClick={handleOpenAddOrders}
                >
                    กำหนดรายการสินค้า
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2,
                        width: "100%",
                        maxWidth: "400px",
                        height: "70px",
                        borderRadius: "8px",
                        color: "#BF0005",
                        backgroundColor: "#FFF",
                        fontFamily: "Anuphan",
                        border: "1px solid #BF0005",
                        "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                    }}
                    onClick={handleOpenSettings}
                >
                    ตั้งค่า
                </Button>
            </Container>
        </>
    );
};

export default SettingsPage;