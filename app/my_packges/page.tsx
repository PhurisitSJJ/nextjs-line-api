'use client';

import { useState } from "react";
import { Box, Button, Container, TextField, Typography, InputAdornment } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const MyPackagePage = () => {
    const router = useRouter();
    const [searchDate, setSearchDate] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleBack = () => {
        router.push('/homepage');
    }

    const receiptList = [
        { receipt_id: "R00006", receipt_date: "20/2/2568", name: "สมชาย เพื่อนสมปอง", tel: "0212399991", addressDetail: "123/65 บ้านวังวง", locationInfo: "ต.วังทอง อ.เมือง จ.เชียงใหม่ 50100" },
        { receipt_id: "R00005", receipt_date: "20/2/2568", name: "สมหญิง ใจดี", tel: "0212399991", addressDetail: "123/65 บ้านวังวง", locationInfo: "ต.วังทอง อ.เมือง จ.เชียงใหม่ 50100" },
        { receipt_id: "R00004", receipt_date: "18/2/2568", name: "สมหญิง ใจดี", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.ขุนควน อ.ปง จ.พะเยา 56140" },
        { receipt_id: "R00003", receipt_date: "17/2/2568", name: "สมชาย เพื่อนสมปอง", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.ขุนควน อ.ปง จ.พะเยา 56140" },
        { receipt_id: "R00002", receipt_date: "16/1/2568", name: "สมชาย เพื่อนสมปอง", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.วังทอง อ.เมือง จ.เชียงใหม่ 50100" },
        { receipt_id: "R00001", receipt_date: "16/1/2568", name: "สมชาย เพื่อนสมปอง", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.ขุนควน อ.ปง จ.พะเยา 56140" },
    ];

    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const [year, month, day] = dateString.split("-");
        return `${parseInt(day)}/${parseInt(month)}/${parseInt(year) + 543}`;
    };

    const filteredReceipts = receiptList.filter(receipt =>
        (!searchDate || formatDate(searchDate) === receipt.receipt_date) &&
        (!searchText ||
            receipt.name.toLowerCase().includes(searchText.toLowerCase()) ||
            receipt.tel.includes(searchText))
    );

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', height: '100vh', px: 2 }}>
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
                        / พัสดุของฉัน
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
                    <TextField
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "Anuphan",
                                height: "50px",
                                borderRadius: "8px",
                                backgroundColor: "white",
                                transition: "background-color 0.3s ease",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                        InputProps={{
                            endAdornment: searchDate && (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setSearchDate("")} sx={{ color: "#BF0005", "&:hover": { color: "#D53F44" } }}>
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />
                    <TextField
                        type="text"
                        value={searchText}
                        placeholder="ค้นหาด้วยชื่อหรือเบอร์โทรศัพท์"
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "Anuphan",
                                height: "50px",
                                borderRadius: "8px",
                                backgroundColor: "white",
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
                        }} />
                </Box>


                {filteredReceipts.map((receipt) => (
                    <Box key={receipt.receipt_id} sx={{ mb: 1, p: 2, border: "1px solid #D2D2D2", borderRadius: "8px", width: "100%", maxWidth: "400px" }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                            <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan', minWidth: '60px' }}>
                                <CalendarMonthIcon /> :
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                                {receipt.receipt_date}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '60px' }}>
                                <ReceiptIcon /> :
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                {receipt.receipt_id}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '60px' }}>
                                <PersonIcon /> :
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                {receipt.name}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '60px' }}>
                                <CallIcon /> :
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                {receipt.tel}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 2 }}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '60px' }}>
                                <PlaceIcon /> :
                            </Typography>
                            <Typography variant="body1"
                                sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', whiteSpace: "normal", wordBreak: "break-word", flex: 1 }}>
                                {receipt.addressDetail}, {receipt.locationInfo}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Container>
        </>
    );
};

export default MyPackagePage;
