'use client';

import { useState } from "react";
import { Box, Button, Container, TextField, Typography, InputAdornment, Divider } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
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

    const handleViewDetail = () => {
        router.push('/my-packages/view');
    }

    const receiptList = [
        { receipt_id: "R065056TH", receipt_date: "20/2/2568", name: "ขนมปัง ฟาร์มเฮ้า", tel: "0895687897", addressDetail: "1/10 บ้านทรายทอง", locationInfo: "ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000" },
        { receipt_id: "R010255TH", receipt_date: "20/2/2568", name: "ขนมปัง ฟาร์มเฮ้า", tel: "0895687897", addressDetail: "1/10 บ้านทรายทอง", locationInfo: "ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000" },
        { receipt_id: "R502004TH", receipt_date: "18/2/2568", name: "ขนมปัง ฟาร์มเฮ้า", tel: "0895687897", addressDetail: "1/10 บ้านทรายทอง", locationInfo: "ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000" },
        // { receipt_id: "R00003", receipt_date: "17/2/2568", name: "สมชาย เพื่อนสมปอง", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.ขุนควน อ.ปง จ.พะเยา 56140" },
        // { receipt_id: "R00002", receipt_date: "16/1/2568", name: "สมชาย เพื่อนสมปอง", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.วังทอง อ.เมือง จ.เชียงใหม่ 50100" },
        // { receipt_id: "R00001", receipt_date: "16/1/2568", name: "สมชาย เพื่อนสมปอง", tel: "0981237081", addressDetail: "164/9 บ้านแสงไทร", locationInfo: "ต.ขุนควน อ.ปง จ.พะเยา 56140" },
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
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                        / พัสดุของฉัน
                    </Typography>
                </Box>

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        วันที่
                    </Typography>
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
                </Box>
                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ค้นหา
                    </Typography>
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

                <Box sx={{ pb: 5 }}>
                    {filteredReceipts.length > 0 ? (
                        filteredReceipts.map((receipt) => (
                            <Box key={receipt.receipt_id} sx={{ mb: 1, p: 2, border: "1px solid #D2D2D2", borderRadius: "8px", width: "100%", maxWidth: "400px"}}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "17px", fontFamily: 'Anuphan' }}>
                                            วันที่ : {receipt.receipt_date}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1"
                                        sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan', cursor: "pointer", transition: "all 0.3s", p: 0.5,  borderRadius: "8px",
                                            "&:hover": { color: "#000", backgroundColor: "#D9D9D9"}}}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigator.clipboard.writeText(receipt.receipt_id);
                                                console.log("Test Click Copy!!!");
                                              }}
                                    >
                                        <ContentCopyIcon />
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 0.5, gap: 2 }}>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                        <ReceiptIcon />
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                        {receipt.receipt_id}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan',  }}>
                                        <PersonIcon />
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                        (ผู้รับ) {receipt.name}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 0.5, gap: 2 }}>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan',  }}>
                                        <CallIcon />
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                        {receipt.tel}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 2 }}>
                                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan',  }}>
                                        <PlaceIcon />
                                    </Typography>
                                    <Typography variant="body1"
                                        sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', whiteSpace: "normal", wordBreak: "break-word", flex: 1 }}>
                                        {receipt.addressDetail}, {receipt.locationInfo}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "end", mt: 0.5, mr: 0.5 }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: "100%",
                                            maxWidth: "120px",
                                            height: "40px",
                                            borderRadius: "8px",
                                            backgroundColor: "#BF0005",
                                            fontFamily: "Anuphan",
                                            "&:hover": { backgroundColor: "#D53F44" },
                                        }}
                                        onClick={handleViewDetail}
                                    >
                                        ดูรายละเอียด
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Box sx={{ mt: 2, width: "100%", maxWidth: "400px", display: "flex", alignItems: "center" }}>
                            <Divider sx={{ flexGrow: 1 }} />
                            <Typography variant="body1" sx={{ mx: 2, color: "#BF0005", fontFamily: "Anuphan" }}>
                                ไม่พบรายการ
                            </Typography>
                            <Divider sx={{ flexGrow: 1 }} />
                        </Box>
                    )}
                </Box>
            </Container >
        </>
    );
};

export default MyPackagePage;
