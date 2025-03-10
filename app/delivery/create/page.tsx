'use client';

import { Box, Button, Card, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, TextareaAutosize, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ConfirmDialog from "@/app/utils/components/delivery_create/ConfirmDialog";
import AddedIcon from '@mui/icons-material/Add';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateDeliveryPage = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false);
        console.log("บันทึกข้อมูลทั้งหมด");
    };

    const handleBack = () => {
        router.push('/delivery')
    }

    const handleAddAddressSender = () => {
        router.push('/delivery/address_sender')
    }

    const handleAddAddressReceiver = () => {
        router.push('/delivery/address_receiver')
    }

    const handleAddProduct = () => {
        router.push('/delivery/product')
    }

    const handleViewDelivery = () => {
        router.push("/delivery/view")
    };

    const handleEditProduct = () => {
        router.push("/delivery/product/edit")
    };

    const productList = [
        { p_id: 101, name: "ขนม", width: 20, length: 20, height: 30, quantity: 1, weight: "20.02", unit: "กล่อง" },
        { p_id: 102, name: "พริกหยวก", width: 40, length: 40, height: 50, quantity: 2, weight: "40.4", unit: "กล่อง" },
        { p_id: 103, name: "ส้มสายน้ำผึ้ง", width: 30, length: 30, height: 40, quantity: 2, weight: "30.4", unit: "กล่อง" },
        { p_id: 104, name: "ปีโป้", width: 20, length: 20, height: 20, quantity: 5, weight: "10.5", unit: "กล่อง" },
    ];

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'top', height: '100vh', px: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
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
                        / สร้างใบสินค้าใหม่
                    </Typography>
                </Box>

                <Typography variant="h5" sx={{ mt: 2, mb: 2, color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                    ข้อมูลผู้ส่ง
                </Typography>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ชื่อผู้ส่ง
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            placeholder="ชื่อ - นามสกุล"
                            type="text"
                            sx={{
                                width: "100%",
                                maxWidth: "360px",
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
                        <IconButton
                            sx={{
                                backgroundColor: "#BF0005",
                                color: "#FFF",
                                borderRadius: "8px",
                                width: "25px",
                                height: "25px",
                                "&:hover": {
                                    backgroundColor: "#D53F44",
                                },
                            }}
                            onClick={handleAddAddressSender}
                        >
                            <AddedIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 1 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ที่อยู่
                    </Typography>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="ข้อมูลที่อยู่"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            fontFamily: 'Anuphan',
                            fontSize: "16px",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            backgroundColor: "#FFF",
                            transition: "background-color 0.3s ease",

                        }}
                        onFocus={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                        onBlur={(e) => e.target.style.backgroundColor = "#FFF"}
                    />
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        เบอร์โทรศัพท์
                    </Typography>
                    <TextField
                        placeholder="เบอร์โทรศัพท์"
                        type="tel"
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

                <Divider />

                <Typography variant="h5" sx={{ mt: 2, mb: 2, color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                    ข้อมูลผู้รับ
                </Typography>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ชื่อผู้รับ
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            placeholder="ชื่อ - นามสกุล"
                            type="text"
                            sx={{
                                width: "100%",
                                maxWidth: "360px",
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
                        <IconButton
                            sx={{
                                backgroundColor: "#BF0005",
                                color: "#FFF",
                                borderRadius: "8px",
                                width: "25px",
                                height: "25px",
                                "&:hover": {
                                    backgroundColor: "#D53F44",
                                },
                            }}
                            onClick={handleAddAddressReceiver}
                        >
                            <AddedIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 1 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ที่อยู่
                    </Typography>

                    <TextareaAutosize
                        minRows={3}
                        placeholder="ข้อมูลที่อยู่"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            fontFamily: 'Anuphan',
                            fontSize: "16px",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            backgroundColor: "#FFF",
                            transition: "background-color 0.3s ease",

                        }}
                        onFocus={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                        onBlur={(e) => e.target.style.backgroundColor = "#FFF"}
                    />
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'start', mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        เบอร์โทรศัพท์
                    </Typography>
                    <TextField
                        placeholder="เบอร์โทรศัพท์"
                        type="tel"
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

                <Divider />

                <Typography variant="h5" sx={{ mt: 2, mb: 2, color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                    รายการสินค้า
                </Typography>


                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {productList.map((product, index) => (
                        <Card key={product.p_id}
                            sx={{ p: 2, width: "100%", maxWidth: "400px", border: "1px solid #D2D2D2", borderRadius: "8px", boxShadow: 1, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
                            onClick={handleEditProduct}
                        >
                            <Box>
                                <Typography variant="h6" sx={{ fontFamily: "Anuphan", color: "blue", fontWeight: "bold", fontSize: "18px", mb: 0.2 }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                    ขนาด (Cm.): {product.width}x{product.length}x{product.height}
                                </Typography>
                            </Box>
                            <Box sx={{ alignItems: "left" }}>
                                <Typography variant="body2" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px", mb: 1 }}>
                                    จำนวน: {product.quantity} {product.unit}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                    น้ำหนัก (Kg.): {product.weight}
                                </Typography>
                            </Box>

                            <IconButton>
                                <ArrowIcon sx={{ color: "#6B6B6B", fontSize: "16px" }} />
                            </IconButton>
                        </Card>
                    ))}
                    <Button
                        variant="contained"
                        onClick={handleAddProduct}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "50px",
                            borderRadius: "8px",
                            backgroundColor: "#FFF",
                            color: "#BF0005",
                            border: "1px solid #BF0005",
                            fontFamily: 'Anuphan',
                            fontSize: "16px",
                            "&:hover": { backgroundColor: "#BF0005", color: "#FFF" }
                        }}>
                        <AddCircleOutlineIcon sx={{ fontSize: "16px", mr: 1 }} />  เพิ่มสินค้า
                    </Button>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'end', width: "100%", maxWidth: "400px", mt: 2, gap: 2, pb: 5 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "100%",
                            maxWidth: "150px",
                            height: "50px",
                            borderRadius: "8px",
                            backgroundColor: "#FFF",
                            color: "#BF0005",
                            border: "1px solid #BF0005",
                            fontFamily: 'Anuphan',
                            "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                        }}
                        onClick={handleViewDelivery}
                    >
                        ตรวจสอบ
                    </Button>
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
                        onClick={handleClickOpen}
                    >
                        บันทึก
                    </Button>
                    <ConfirmDialog
                        open={open}
                        onClose={handleClose}
                        onConfirm={handleConfirm}
                        title="ยืนยันการบันทึก"
                        description="คุณต้องการบันทึกข้อมูลทั้งหมดใช่หรือไม่?"
                    />
                </Box>



            </Container>
        </>
    );
};

export default CreateDeliveryPage;