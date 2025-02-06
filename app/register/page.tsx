'use client'

import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const RegisterPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfrimPassword, setShowConfrimPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleRegister = () => {
        if (isChecked) {
            router.push('/confrim_otp');
        } else {
            alert("คุณต้องยินยอมก่อนจึงจะสามารถดำเนินการต่อได้");
        }
    }

    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked);
    };



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
                    mb: 2,
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
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                ลงทะเบียน
            </Typography>

            <TextField
                placeholder="เบอร์โทรศัพท์"
                type="tel"
                margin="normal"
                sx={{
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
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CallIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <TextField
                placeholder="รหัสผ่าน"
                type={showPassword ? "text" : "password"}
                margin="normal"
                sx={{
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
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <TextField
                placeholder="ยืนยันรหัสผ่าน"
                type={showConfrimPassword ? "text" : "password"}
                margin="normal"
                sx={{
                    mb: 8,
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
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowConfrimPassword(!showConfrimPassword)}
                                edge="end"
                            >
                                {showConfrimPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', maxWidth: '400px' }}>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#000000",
                        fontSize: "14px",
                    }}
                >
                    ข้าพเจ้าได้อ่านเเละยอมรับเงื่อนไขดังกล่าว
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "#6B6B6B",
                        fontSize: "12px",
                    }}
                >
                    (ข้อกำหนดและเงื่อนไขการบริการ) & ประกาศความเป็นส่วนตัวสำหรับลูกค้า
                </Typography>


                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            name="agreeCheckbox"
                            color="primary"
                        />
                    }
                    label={
                        <Typography variant="body2" sx={{ fontSize: '14px', color: 'gray' }}>
                            ยินยอม
                        </Typography>
                    }
                />
            </Box>

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
                onClick={handleRegister}
            >
                ลงทะเบียน
            </Button>

        </Container>
    );
};

export default RegisterPage;