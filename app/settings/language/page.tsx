'use client';

import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const LanguagePage = () => {
    const router = useRouter();
    const [language, setLanguage] = useState("th");

    const handleBack = () => {
        router.push('/settings');
    }

    const handleSelectLanguage = (lang: string) => {
        setLanguage(lang);
    };

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
                        / เลือกภาษา
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Button
                        variant="outlined"
                        onClick={() => handleSelectLanguage("th")}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "50px",
                            borderRadius: "8px",
                            fontFamily: 'Anuphan',
                            justifyContent: "space-between",
                            color: "#333", borderColor: "#ddd",
                            bgcolor: language === "th" ? "#f5f5f5" : "white",
                        }}>
                        ไทย {language === "th" && <CheckIcon sx={{ color: "#4CAF50" }} />}
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={() => handleSelectLanguage("en")}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "50px",
                            borderRadius: "8px",
                            fontFamily: 'Anuphan',
                            justifyContent: "space-between",
                            color: "#333", borderColor: "#ddd",
                            bgcolor: language === "th" ? "#f5f5f5" : "white",
                        }}>
                        English {language === "en" && <CheckIcon sx={{ color: "#4CAF50" }} />}
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={() => handleSelectLanguage("zh")}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "50px",
                            borderRadius: "8px",
                            fontFamily: 'Anuphan',
                            justifyContent: "space-between",
                            color: "#333", borderColor: "#ddd",
                            bgcolor: language === "th" ? "#f5f5f5" : "white",
                        }}>
                        中文 {language === "zh" && <CheckIcon sx={{ color: "#4CAF50" }} />}
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default LanguagePage;
