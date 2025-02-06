'use client';

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const ConfrimOtpPage = () => {
    const router = useRouter();

    const handleConfrimOTP = () => {
        router.push('/agree_data');
    }

    return (
        <Container maxWidth="xs" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            px: 2,
        }}>

            <Box
                sx={{
                    mb: 4,
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'white',
                }}
            >
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
                }}
            >
                OTP
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    mb: 1,
                    color: "#6B6B6B",
                    fontSize: "14px",
                }}
            >
                กรอกรหัส OTP ที่ได้จากเบอร์โทรศัพท์
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    mb: 1.5,
                    color: "#6B6B6B",
                    fontSize: "14px",
                    fontWeight: "bold",
                }}
            >
                {" 099-999-99xx "}
            </Typography>

            <TextField
                placeholder="โปรดใส่รหัส OTP "
                type="text"
                margin="normal"
                sx={{
                    mb: 5,
                    width: "100%",
                    maxWidth: "400px",
                    "& .MuiOutlinedInput-root": {
                        height: "50px",
                        borderRadius: "8px",
                        backgroundColor: "white",
                        transition: "background-color 0.3s ease",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        backgroundColor: "#f0f0f0",
                    },
                }}
            />

            <Typography
                variant="body2"
                sx={{
                    fontSize: "14px",
                    color: "#6B6B6B",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" }
                }}
            // onClick={}
            >
                ส่งรหัสใหม่อีกครั้ง
            </Typography>

            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt: 1,
                    width: "100%",
                    maxWidth: "400px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#BF0005",
                    "&:hover": { backgroundColor: "#D53F44", },
                }}
                onClick={handleConfrimOTP}
            >
                ยืนยัน
            </Button>


        </Container>
    );
};

export default ConfrimOtpPage;