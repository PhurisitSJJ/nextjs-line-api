'use client';

import { Box, Button, Card, Container, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProductPage = () => {
    const router = useRouter();

    const productList = [
        { p_id: 101, name: "ขนม", width: 20, length: 20, height: 30, quantity: 0, weight: "20.02", unit: "กล่อง" },
        { p_id: 102, name: "พริกหยวก", width: 40, length: 40, height: 50, quantity: 0, weight: "40.4", unit: "กล่อง" },
        { p_id: 103, name: "ส้มสายน้ำผึ้ง", width: 30, length: 30, height: 40, quantity: 0, weight: "30.4", unit: "กล่อง" },
        { p_id: 104, name: "ปีโป้", width: 20, length: 20, height: 20, quantity: 0, weight: "10.5", unit: "กล่อง" },
    ];

    const [searchText, setSearchText] = useState("");

    const filteredList = productList.filter(item =>
        item.name.includes(searchText)
    );

    const handleBack = () => {
        router.push('/delivery/create')
    }

    const handleAddNewProduct = () => {
        router.push('/delivery/product/add')
    }

    const handleSelectProduct = () => {
        router.push('/delivery/product/edit')
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
                        / เพิ่มสินค้า
                    </Typography>
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                        ค้นหา
                    </Typography>
                    <TextField
                        placeholder="ชื่อสินค้า"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
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
                        InputProps={{
                            endAdornment: searchText && (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setSearchText("")} sx={{ color: "#BF0005", "&:hover": { color: "#D53F44" } }}>
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="body2" sx={{ mb: 0.5, ml: 2, color: "#6B6B6B", fontSize: "14px", fontFamily: 'Anuphan' }}>
                        รายการที่เคยเพิ่ม
                    </Typography>
                    {filteredList.length > 0 ? (

                        filteredList.map((product, index) => (
                            <Card
                                key={index}
                                sx={{
                                    p: 1,
                                    width: "100%",
                                    maxWidth: "400px",
                                    border: "1px solid #D2D2D2",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    "&:hover": { backgroundColor: "#BF0007", border: "1px solid #BF0005", },
                                    "&:hover .MuiTypography-root": { color: "#FFF" },

                                }}
                                onClick={handleSelectProduct}
                            >
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan" }}>
                                    {product.name}
                                </Typography>
                            </Card>

                        ))
                    ) : (
                        <Box sx={{ width: "100%", maxWidth: "400px", display: "flex", alignItems: "center" }}>
                            <Divider sx={{ flexGrow: 1 }} />
                            <Typography variant="body1" sx={{ mx: 2, color: "#BF0005", fontFamily: 'Anuphan' }}>
                                ไม่พบสินค้า
                            </Typography>
                            <Divider sx={{ flexGrow: 1 }} />
                        </Box>
                    )}
                    <Button
                        variant="contained"
                        onClick={handleAddNewProduct}
                        sx={{
                            mt: 1,
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
                        <AddCircleOutlineIcon sx={{ fontSize: "16px", mr: 1 }} />  เพิ่มสินค้าใหม่
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default AddProductPage;