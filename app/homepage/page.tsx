'use client';

import { Container, TextField, Button, Box, Typography, InputAdornment } from '@mui/material';
import MemberNavbar from '@/app/utils/components/MemberNavber'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);

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
            <Container maxWidth="xs"
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
                    ติดตามสถานะพัสดุของคุณ
                </Typography>

                <Box sx={{
                    display: "flex",
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
                        <Typography variant="body1" color="textSecondary" sx={{fontFamily: 'Anuphan',}}>
                            ไม่มีข้อมูลที่ค้นหา
                        </Typography>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default HomePage;
