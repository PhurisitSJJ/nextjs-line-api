'use client';

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { useState } from "react";

const TemplateDeliveryPage = () => {

    const nameList = [
        { sender: "สมหญิง สุขใจ", receiver: "ขนมปัง ฟาร์มเฮ้า", tel: "0981237081" },
        { sender: "สมชาย เพื่อนสมปอง", receiver: "เจริญพร พี่น้อง", tel: "0637771212" },
        { sender: "ยายชา ตากาแฟ", receiver: "เครื่องดื่ม หวานเจี๊ยบ", tel: "0812122244" },
    ];

    const [searchText, setSearchText] = useState("");

    const filteredList = nameList.filter(item =>
        item.sender.includes(searchText) || item.tel.includes(searchText)
    );

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

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 1.5, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        วันที่
                    </Typography>
                    <TextField
                        placeholder="กรุณาเลือกวันที่"
                        type="date"
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

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 3, }}>
                    <Typography variant="body1" sx={{ mb: 0.5, color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        ค้นหา
                    </Typography>
                    <TextField
                        placeholder="ชื่อลูกค้า หรือ เบอร์โทรศัพท์"
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
                    />
                </Box>
                
                
                {searchText && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 5 }}>
                        {filteredList.length > 0 ? (
                            filteredList.map((item, index) => (
                                <Box key={index} sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 1.5 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                            ผู้ส่ง
                                        </Typography>
                                        <TextField
                                            value={item.sender}
                                            type="text"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "350px",
                                                "& .MuiOutlinedInput-root": {
                                                    fontFamily: 'Anuphan',
                                                    height: "50px",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#FFF",
                                                },
                                                "& .MuiOutlinedInput-root.Mui-focused": {
                                                    backgroundColor: "#f0f0f0",
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                                            ผู้รับ
                                        </Typography>
                                        <TextField
                                            value={item.receiver}
                                            type="text"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "350px",
                                                "& .MuiOutlinedInput-root": {
                                                    fontFamily: 'Anuphan',
                                                    height: "50px",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#FFF",
                                                },
                                                "& .MuiOutlinedInput-root.Mui-focused": {
                                                    backgroundColor: "#f0f0f0",
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, gap: 2 }}>
                                        <Button
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
                                        >
                                            รายละเอียด
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "150px",
                                                height: "50px",
                                                borderRadius: "8px",
                                                backgroundColor: "#BF0005",
                                                fontFamily: 'Anuphan',
                                                "&:hover": { backgroundColor: "#D53F44" },
                                            }}
                                        >
                                            ลบข้อมูล
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="body1" sx={{ textAlign: 'center', color: "#BF0005", fontFamily: 'Anuphan' }}>
                                ไม่พบข้อมูล
                            </Typography>
                        )}
                    </Box>
                )}
            </Container>
        </>
    );
};

export default TemplateDeliveryPage;