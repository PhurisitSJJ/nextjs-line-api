'use client';

import { Container, TextField, Button, Box, Typography } from '@mui/material';
import MemberNavbar from '@/app/utils/components/MemberNavber'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]); // สมมติเป็น array ของผลลัพธ์

    const handleSearch = () => {
        // ตัวอย่าง: ค้นหาข้อมูล (สมมติว่าหาใน Array ธรรมดา)
        const sampleData = ["ข่าวสาร 1", "ข่าวสาร 2", "ข้อมูล 3", "บทความ 4"];
        const filteredResults = sampleData.filter(item => 
            item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <>
            <MemberNavbar />
            <Container sx={{ mt: 4 }}>
                {/* กล่องค้นหา */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
                    <TextField
                        label="ค้นหาข้อมูล"
                        variant="outlined"
                        fullWidth
                        sx={{ maxWidth: 400 }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSearch}
                        startIcon={<SearchIcon />}
                    >
                        ค้นหา
                    </Button>
                </Box>

                
                <Box>
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <Typography key={index} variant="h6" sx={{ mb: 1 }}>
                                {item}
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body1" color="textSecondary">
                            ไม่มีข้อมูลที่ค้นหา
                        </Typography>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default SearchPage;
