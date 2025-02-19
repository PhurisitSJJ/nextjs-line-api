'use client';

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
    const router = useRouter();

    const handleAddProdutName = () => {
        router.push('/delivery/create')
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
                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ชื่อสินค้า
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            placeholder="ชื่อสินค้า"
                            type="text"
                            sx={{
                                width: "100%",
                                maxWidth: "400px",
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: 'Anuphan',
                                    height: "50px",
                                    borderRadius: "8px",
                                    backgroundColor: "#FFF",
                                    transition: "background-color 0.3s ease",
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    backgroundColor: "#f0f0f0",
                                },
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', mt: 1, pb: 5}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "100%",
                            maxWidth: "150px",
                            height: "50px",
                            borderRadius: "8px",
                            backgroundColor: "#BF0005",
                            fontFamily: 'Anuphan',
                            "&:hover": { backgroundColor: "#D53F44", },
                        }}
                    onClick={handleAddProdutName}
                    >
                        เพิ่มสินค้า
                    </Button>
                </Box>

            </Container>
        </>
    );
};

export default AddProductPage;