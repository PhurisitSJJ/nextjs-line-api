'use client'

import { Container, Typography, TextField, Button, Box, InputAdornment, Divider, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import liff from '@line/liff';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    liff.init({
      liffId: '2006781477-NzeKaxpL'
    }).then(() => {
    })
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/homepage');
  }

  const handleForgetPassword = () => {
    router.push('/forget-password');
  }

  const hendleLoginLineLiff = () => {
    try {
      liff.login()
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', px: 2, }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, bgcolor: 'white', mb: 5 }} >
        <Image src="/assets/logo/nim.png" alt="Logo" width={200} height={100} />
      </Box>

      <form onSubmit={handleLogin}>
        <Box>
          <TextField
            placeholder="เบอร์โทรศัพท์"
            type="tel"
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
                  <CallIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="รหัสผ่าน"
            type={showPassword ? "text" : "password"}
            sx={{
              mb: 1,
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

          <Box sx={{ width: "100%", maxWidth: "400px", display: "flex", justifyContent: "end" }}>
            <Typography variant="body2"
              onClick={handleForgetPassword}
              sx={{ mb: 4, color: "#6B6B6B", cursor: "pointer", fontFamily: 'Anuphan', "&:hover": { textDecoration: "underline" } }}>
              ลืมรหัสผ่าน
            </Typography>
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            mb: 2,
            width: "100%",
            maxWidth: "400px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: "#BF0005",
            fontFamily: 'Anuphan',
            "&:hover": { backgroundColor: "#D53F44", },
          }}
          // onClick={handleLogin}
        >
          เข้าสู่ระบบ
        </Button>
      </form>


      <Box sx={{ width: "100%", maxWidth: "400px", display: "flex", alignItems: "center" }}>
        <Divider sx={{ flexGrow: 1 }} />
        <Typography variant="body2" sx={{ mx: 2, fontSize: "14px", color: "gray" }}>
          or
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>

      <IconButton
        sx={{
          mt: 2,
          width: "50px",
          height: "50px",
          backgroundColor: "#00c300",
          color: "white",
          borderRadius: "8px",
          padding: "5px",
          "&:hover": { backgroundColor: "#00b300" },
        }}
        onClick={hendleLoginLineLiff}
      >
        <Image src="/assets/line/line.png" alt="Line Icon" width={40} height={40} style={{ filter: "invert(1)" }} />
      </IconButton>
    </Container>
  );
};

export default LoginPage;
