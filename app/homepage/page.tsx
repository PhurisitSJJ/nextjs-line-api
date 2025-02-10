'use client';

import { Container, TextField, Button, Box, Typography, InputAdornment, Card, Grid, CardMedia, CardContent } from '@mui/material';
import MemberNavbar from '@/app/utils/components/MemberNavber'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);
    const router = useRouter();

    const listMenu = [
        {
            title: "สร้างใบส่งสินค้า",
            img: "/assets/icon_page/add_data.png",
            path: "/delivery",
        },
        {
            title: "กำหนดข้อมูล",
            img: "/assets/icon_page/data.png",
            path: "/settings",
        },
        {
            title: "สินค้ารอส่ง",
            img: "/assets/icon_page/box_2.png",
            path: "/orders",
        },
        {
            title: "พ้สดุของฉัน",
            img: "/assets/icon_page/search_box.png",
            path: "/my_packges",
        },
        {
            title: "เพิ่มผู้ใช้งาน",
            img: "/assets/icon_page/add_user.png",
            path: "/add_user",
        },
        {
            title: "แสกน เพื่อเข้าร่วม",
            img: "/assets/icon_page/scan_add.png",
            path: "/scan_join",
        },
    ]

    const handleSearch = () => {
        const sampleData = ["ข่าวสาร 1", "ข่าวสาร 2", "ข้อมูล 3", "บทความ 4"];
        const filteredResults = sampleData.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <>
            <MemberNavbar />
            <Container
                sx={{
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'top',
                    height: '100vh',
                    px: 2,
                }}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
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
                        ติดตามสถานะพัสดุของคุณ
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 2,
                    mb: 4,

                }}>
                    <TextField
                        placeholder="กรุณากรอกเลขพ้สดุของคุณ"
                        type="text"
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            "& .MuiOutlinedInput-root": {
                                fontFamily: 'Anuphan',
                                height: "50px",
                                borderRadius: "8px",
                                backgroundColor: "white",
                                transition: "background-color 0.3s ease",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            fontFamily: 'Anuphan',
                            width: "100%",
                            maxWidth: "50px",
                            height: "50px",
                            borderRadius: "8px",
                            backgroundColor: "#BF0005",
                            "&:hover": { backgroundColor: "#D53F44", },
                        }}
                        onClick={handleSearch}
                    >
                        ค้นหา
                    </Button>
                </Box>

                <Box>
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <Typography key={index} variant="h6" sx={{ mb: 1, fontFamily: 'Anuphan', }}>
                                {item}
                            </Typography>
                        ))
                    ) : (
                        null
                    )}
                </Box>
                <Grid container spacing={2} sx={{ pb: 5 }}>
                    {listMenu.map((item, index) => (
                        <Grid item xs={6} sm={4} key={index} >
                            <Card
                                onClick={() => router.push(item.path)}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 2,
                                    textAlign: "center",
                                    height: "100%",
                                    maxHeight: "80%",
                                    borderRadius: "8px",
                                    transition: "0.3s",
                                    cursor: "pointer",
                                    "&:hover": { boxShadow: 3, backgroundColor: "#D53F44", color: "#FFF" },
                                    "&:hover img": { filter: "brightness(0) invert(1)"},
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.img}
                                    alt={item.title}
                                    sx={{
                                        mt: 2,
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "contain",
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="body1" sx={{ fontFamily: 'Anuphan', fontSize: '16px' }}>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>


            </Container>
        </>
    );
};

export default HomePage;
