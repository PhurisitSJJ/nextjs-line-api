'use client'

import { Box, Button, Container, InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const ForgetPasswordPage = () => {
    const router = useRouter();

    const handleOpenLoginPage = () => {
        router.push('/');
    }

    return (
        <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  height: '100vh' }}>
            <Box sx={{ mb: 2, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white',}}>
                <Image
                    src="/assets/logo/nim.png"
                    alt="Logo"
                    width={200}
                    height={100}
                />
            </Box>

            <Typography
                variant="h5"
                sx={{
                    mb: 1.5,
                    color: "#6B6B6B",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: 'Anuphan',
                }}
            >
                ลืมรหัสผ่าน
            </Typography>

            <TextField
                placeholder="อีเมล"
                type="text"
                sx={{
                    mb: 2,
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
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <TextField
                placeholder="รหัสยืนยัน"
                type="text"
                sx={{
                    mb: 4,
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
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#BF0005",
                    fontFamily: 'Anuphan',
                    "&:hover": { backgroundColor: "#D53F44", },
                }}
                onClick={handleOpenLoginPage}
            >
                ยืนยัน
            </Button>

        </Container>
    );
};

export default ForgetPasswordPage;