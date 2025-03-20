'use client';

import { Box, Button, Card, Chip, Container, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import { useRouter } from "next/navigation";
import { useState } from "react";

const SenderPage = () => {
    const router = useRouter();

    const addressList = [
        { id: "001", name: "สมหญิง สุขใจ", tel: "0891237081", addressDetail: "123/65 บ้านสุขใจ", locationInfo: "ต.แกดำ อ.แกดำ จ.มหาสารคาม 44190", type: "บ้าน" },
        { id: "002", name: "สมหญิง สุขใจ", tel: "0891237081", addressDetail: "1/10 บ้านทรายทอง", locationInfo: "ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000", type: "ที่ทำงาน" },
        { id: "003", name: "ยายชา ตากาแฟ", tel: "0999995566", addressDetail: "99/9 บ้านนี้อยู่แล้วรวย", locationInfo: "ต.นาปรัง อ.ปง จ.พะเยา 56140", type: "ที่ทำงาน" },
        { id: "004", name: "สมชาย ใจดี", tel: "0999995566", addressDetail: "99/9 บ้านนี้อยู่แล้วรวย", locationInfo: "ต.นาปรัง อ.ปง จ.พะเยา 56140", type: "บ้าน" },
    ];

    const [searchText, setSearchText] = useState("");

    const filteredList = addressList.filter(item =>
        item.name.includes(searchText) || item.tel.includes(searchText)
    );

    const handleBack = () => {
        const prevPage = sessionStorage.getItem("prevPage");
        if (prevPage) {
            router.push(prevPage);
            sessionStorage.removeItem("prevPage");
        } else {
            router.back(); 
        }
    };

    const handleAddAddressSender = () => {
        router.push('/delivery/sender/add')
    }

    const handleEditAddressSender = () => {
        router.push('/delivery/sender/edit')
    }

    const handleSelectAddressSender = () => {
        router.push('/delivery/create')
    }


    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'top', height: '100vh', px: 2, }}>
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
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                        / ที่อยู่ของผู้ส่ง
                    </Typography>
                </Box>

                <Box sx={{ mb: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                        ค้นหา
                    </Typography>
                    <TextField
                        placeholder="ชื่อผู้ส่ง หรือ เบอร์โทรศัพท์"
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

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 5 }}>
                    {filteredList.length > 0 ? (
                        filteredList.map((addresslist, index) => (
                            <Card
                                key={index}
                                sx={{
                                    p: 2,
                                    width: "100%",
                                    maxWidth: "400px",
                                    border: "1px solid #D2D2D2",
                                    borderRadius: "12px",
                                    boxShadow: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%",
                                }}
                            >
                                <Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                        <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                            {addresslist.name} | {addresslist.tel}
                                        </Typography>
                                        {addresslist.type === "บ้าน" ? (
                                            <HomeIcon sx={{ fontSize: "23px", color: "#BF0005" }} />
                                        ) : addresslist.type === "ที่ทำงาน" ? (
                                            <BusinessIcon sx={{ fontSize: "23px", color: "#BF0005" }} />
                                        ) : null}
                                    </Box>
                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", mt: "5px" }}>
                                        {addresslist.addressDetail}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", mt: "5px" }}>
                                        {addresslist.locationInfo}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                                    <Chip
                                        label={"ค่าเริ่มต้น"}
                                        sx={{ width: "90px", height: "30px", borderRadius: "8px", color: "#BF0005", backgroundColor: "#FFF", border: "1px solid #BF0005", fontFamily: "Anuphan", fontSize: "12px", }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "60px",
                                                height: "30px",
                                                borderRadius: "8px",
                                                backgroundColor: "#FFF",
                                                color: "#BF0005",
                                                border: "1px dashed #BF0005",
                                                fontFamily: 'Anuphan',
                                                fontSize: "12px",
                                                "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                                            }}
                                            onClick={handleEditAddressSender}
                                        >
                                            แก้ไข
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "60px",
                                                height: "30px",
                                                borderRadius: "8px",
                                                backgroundColor: "#FFF",
                                                color: "#BF0005",
                                                border: "1px dashed #BF0005",
                                                fontFamily: 'Anuphan',
                                                fontSize: "12px",
                                                "&:hover": { backgroundColor: "#BF0005", color: "#FFF" },
                                            }}
                                            onClick={handleSelectAddressSender}
                                        >
                                            เลือก
                                        </Button>
                                    </Box>
                                </Box>
                            </Card>
                        ))
                    ) : (
                        <Box sx={{ width: "100%", maxWidth: "400px", display: "flex", alignItems: "center" }}>
                            <Divider sx={{ flexGrow: 1 }} />
                            <Typography variant="body1" sx={{ mx: 2, color: "#BF0005", fontFamily: 'Anuphan' }}>
                                ไม่พบข้อมูล
                            </Typography>
                            <Divider sx={{ flexGrow: 1 }} />
                        </Box>
                    )}
                    <Button
                        variant="contained"
                        onClick={handleAddAddressSender}
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
                        <AddCircleOutlineIcon sx={{ fontSize: "16px", mr: 1 }} />  เพิ่มที่อยู่ใหม่
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default SenderPage;