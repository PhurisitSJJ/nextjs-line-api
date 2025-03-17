'use client';

import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import CloseIcon from '@mui/icons-material/Close';


const OrdersDetailPage = () => {

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'top', height: '100vh', px: 2 }}>
                <Typography variant="h5" sx={{ mt: 2, mb: 2, color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                    รายการสินค้า/แก้ไข
                </Typography>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ชื่อสินค้า
                    </Typography>
                    <TextField
                        placeholder="ชื่อสินค้า"
                        type="text"
                        sx={{
                            width: "100%", maxWidth: "400px",
                            "& .MuiOutlinedInput-root": { fontFamily: 'Anuphan', height: "50px", borderRadius: "8px", backgroundColor: "#FFF", transition: "background-color 0.3s ease" },
                            "& .MuiOutlinedInput-root.Mui-focused": { backgroundColor: "#f0f0f0" },
                        }} />
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ขนาดสินค้า
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
                <Box sx={{ mb: 2 }}>
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
                                fullWidth
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
                                fullWidth
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
                <Box sx={{ display: 'flex', justifyContent: 'end', mt: 1, mb: 2, }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "50px",
                            borderRadius: "8px",
                            backgroundColor: "#BF0005",
                            fontFamily: 'Anuphan',
                            "&:hover": { backgroundColor: "#D53F44", },
                        }}
                    // onClick={บันทึกรายการสินค้า}
                    >
                        บันทึกรายการแก้ไข
                    </Button>
                </Box>

            </Container>
        </>
    );
};

export default OrdersDetailPage;