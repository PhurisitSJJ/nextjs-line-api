'use client';

import { Box, Container, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";

const MemberPage = () => {

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

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            color: "#6B6B6B",
                            fontSize: "20px",
                            fontFamily: 'Anuphan'
                        }}
                    >
                        สมาชิก
                    </Typography>
                </Box>

            </Container>
            </>
    );
};

export default MemberPage;