'use client';

import { Box, Button, Card, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, TextareaAutosize, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import AddedIcon from '@mui/icons-material/Add';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateDeliveryPage = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true); // เปิด Popup
    };

    const handleClose = () => {
        setOpen(false); // ปิด Popup
    };
    const handleConfirm = () => {
        setOpen(false);
        console.log("บันทึกข้อมูลทั้งหมด");
    };

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

    const handleEditOrder = () => {
        router.push("/delivery/orders")
    };

    const productList = [
        { p_id: 101, name: "ขนม", width: 20,length: 20,height: 30, quantity: 1, weight: "20.02", unit: "กล่อง" },
        { p_id: 102, name: "พริกหยวก", width: 40,length: 40,height: 50, quantity: 2, weight: "40.4", unit: "กล่อง" },
        { p_id: 103, name: "ส้มสายน้ำผึ้ง", width: 30,length: 30,height: 40, quantity: 2, weight: "30.4", unit: "กล่อง" },
        { p_id: 104, name: "ปีโป้", width: 20,length: 20,height: 20, quantity: 5, weight: "10.5", unit: "กล่อง" },
    ];

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

                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        color: "#6B6B6B",
                        fontSize: "20px",
                        fontFamily: 'Anuphan'
                    }}
                >
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

                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                        mb: 2,
                        color: "#6B6B6B",
                        fontSize: "20px",
                        fontFamily: 'Anuphan'
                    }}
                >
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

                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                        mb: 2,
                        color: "#6B6B6B",
                        fontSize: "20px",
                        fontFamily: 'Anuphan'
                    }}
                >
                    รายการสินค้า
                </Typography>

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
                        onClick={handleAddProduct}
                        >
                            <AddedIcon />
                        </IconButton>
                    </Box>
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
                            maxWidth: "150px",
                            height: "50px",
                            borderRadius: "8px",
                            backgroundColor: "#BF0005",
                            fontFamily: 'Anuphan',
                            "&:hover": { backgroundColor: "#D53F44", },
                        }}
                    // onClick={บันทึกรายการสินค้า}
                    >
                        บันทึกรายการ
                    </Button>
                </Box>

                <Divider sx={{ border: "1px solid #BF0005" }} />

                <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                    {productList.map((product, index) => (
                        <Card
                            key={index}
                            sx={{ p: 2, border: "1px solid #D2D2D2", borderRadius: "8px", boxShadow: 1, display: "flex", alignItems: "center", justifyContent: "space-between",cursor:"pointer" }}
                            onClick={handleEditOrder}
                        >
                            <Box>
                                <Typography variant="h6" sx={{ fontFamily: "Anuphan", color: "blue",fontWeight: "bold", fontSize: "18px",mb: 0.2 }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                    ขนาด (Cm.): {product.width}x{product.length}x{product.height} 
                                </Typography>
                            </Box>
                            <Box sx={{ alignItems: "left"}}>
                                <Typography variant="body2" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px", mb: 1 }}>
                                    จำนวน: {product.quantity} {product.unit}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                    น้ำหนัก (Kg.): {product.weight}
                                </Typography>
                            </Box>

                            <IconButton>
                                <ArrowIcon sx={{ color: "#6B6B6B", fontSize: "16px"}} />
                            </IconButton>
                        </Card>
                    ))}
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'end',mt:2, gap: 2, pb: 5 }}>
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
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        sx={{
                            "& .MuiPaper-root": {
                                borderRadius: "12px",
                                minWidth: "350px",
                            }
                        }}
                    >
                        <DialogTitle sx={{ fontFamily: 'Anuphan', color: "#BF0005" }}>
                            ยืนยันการบันทึก
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText sx={{ fontFamily: 'Anuphan', color: "#6B6B6B" }}>
                                คุณต้องการบันทึกข้อมูลทั้งหมดใช่หรือไม่?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: "center", gap: 1, pb: 2 }}>
                            <Button
                                onClick={handleClose}
                                sx={{
                                    backgroundColor: "#FFF",
                                    color: "#BF0005",
                                    border: "1px solid #BF0005",
                                    borderRadius: "8px",
                                    fontFamily: "Anuphan",
                                    "&:hover": {
                                        backgroundColor: "#BF0005",
                                        color: "#FFF",
                                    },
                                }}
                            >
                                ยกเลิก
                            </Button>
                            <Button
                                onClick={handleConfirm}
                                sx={{
                                    backgroundColor: "#BF0005",
                                    color: "#FFF",
                                    borderRadius: "8px",
                                    fontFamily: "Anuphan",
                                    "&:hover": {
                                        backgroundColor: "#D53F44",
                                    },
                                }}
                                variant="contained"
                            >
                                ยืนยัน
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>



            </Container>
        </>
    );
};

export default CreateDeliveryPage;