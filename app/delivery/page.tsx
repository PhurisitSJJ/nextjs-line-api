'use client';

import { Button, Container } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { useRouter } from 'next/navigation';


const DeliveryPage = () => {
    const router = useRouter();

    const handleCreateNewDerivery = () => {
        router.push('/delivery/create');
    }

    const handleTemplateDerivery = () => {
        router.push('/delivery/template');
    }

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs"
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
                        backgroundColor: "#BF0005",
                        fontFamily: 'Anuphan',
                        "&:hover": { backgroundColor: "#D53F44", },
                    }}
                    onClick={handleCreateNewDerivery}
                >
                    สร้างใบส่งสินค้าใหม่
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 3,
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
                    onClick={handleTemplateDerivery}
                >
                    Template
                </Button>


            </Container>
        </>
    );
};

export default DeliveryPage;