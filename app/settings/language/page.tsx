'use client';

import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import CheckIcon from '@mui/icons-material/Check';

const LanguagePage = () => {
    const [language, setLanguage] = useState("th");

    const handleSelectLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', height: '100vh', px: 2 }}>
                <Typography variant="h6" sx={{ color: "#6B6B6B", fontFamily: 'Anuphan', mb: 1.5 }}>
                    เลือกภาษา
                </Typography>

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
