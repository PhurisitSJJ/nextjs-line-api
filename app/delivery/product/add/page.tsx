'use client';

import { Box, Button, Container, Grid, IconButton, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/delivery/product')
    }

    const handleAddProduct = () => {
        router.push('/delivery/create')
    }

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'top', height: '100vh', px: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 2 }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBack}
                        sx={{
                            color: "#BF0005",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            "&:hover": { color: "#2200FF" },
                            "&:hover .MuiTypography-root": { color: "#2200FF" },
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "#BF0005", fontSize: "16px", fontFamily: 'Anuphan', }}>
                            ย้อนกลับ
                        </Typography>
                    </Button>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                        / เพิ่มสินค้าใหม่
                    </Typography>
                </Box>


                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ชื่อสินค้า
                    </Typography>

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

                <Box sx={{ width: "100%", maxWidth: "400px", flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 2, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ขนาดสินค้า
                    </Typography>

                    <Box sx={{  display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            placeholder="กว้าง"
                            type="number"
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
                        <Typography sx={{ color: "#6B6B6B", }}>
                            <CloseIcon sx={{ fontSize: 20 }} />
                        </Typography>
                        <TextField
                            placeholder="ยาว"
                            type="number"
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

                        <Typography sx={{ color: "#6B6B6B" }}>
                            <CloseIcon sx={{ fontSize: 20 }} />
                        </Typography>

                        <TextField
                            placeholder="สูง"
                            type="number"
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
                <Box sx={{ mb: 2, width: "100%", maxWidth: "400px", }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                น้ำหนัก (KG)
                            </Typography>
                            <TextField
                                placeholder="น้ำหนัก"
                                type="number"
                                sx={{
                                    mt: 0.5,
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
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                จำนวน
                            </Typography>
                            <TextField
                                placeholder="จำนวน"
                                type="number"
                                sx={{
                                    mt: 0.5,
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
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                หน่วย
                            </Typography>
                            <TextField
                                placeholder="หน่วย"
                                type="text"
                                sx={{
                                    mt: 0.5,
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
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ width: "100%", maxWidth: "400px", display: 'flex', justifyContent: 'end', mt: 1, mb: 2, }}>
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
                    onClick={handleAddProduct}
                    >
                        เพิ่มสินค้าและส่ง
                    </Button>
                </Box>

            </Container>
        </>
    );
};

export default AddProductPage;