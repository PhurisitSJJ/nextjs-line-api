'use client'

import { Container, Typography, TextField, Button, Box, InputAdornment, Divider, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import React, { useEffect } from 'react';
import liff from '@line/liff';

const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    liff.init({
      liffId: '2006781477-NzeKaxpL'
    }).then(() => {
    })
  }, [])

  const handleLogin = () => {
    router.push('/home_page');
  }

  const hendleLoginLineLiff = () => {
    try {
      liff.login()
    } catch (e) {
      console.log(e)
    }
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          bgcolor: 'white',
          mb: 5
        }}
      >
        <Image
          src="/assets/logo/nim.png"
          alt="Logo"
          width={200}
          height={100}
        />
      </Box>

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
          },
        }}
        InputProps={{
          style: { backgroundColor: "#f0f0f0" },
          startAdornment: (
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        placeholder="รหัสผ่าน"
        type="password"
        margin="normal"
        sx={{
          width: "100%",
          maxWidth: "400px",
          "& .MuiOutlinedInput-root": {
            height: "50px",
            borderRadius: "8px",
          },
        }}
        InputProps={{
          style: { backgroundColor: "#f0f0f0" },
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Typography
          variant="body2"
          sx={{
            mb: 4,
            color: "#6B6B6B",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" }
          }}
        // onClick={}
        >
          ลืมรหัสผ่าน
        </Typography>
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
          "&:hover": { backgroundColor: "#D53F44", },
        }}
        onClick={handleLogin}
      >
        เข้าสู่ระบบ
      </Button>

      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
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
        <Image
          src="/assets/line/line.png"
          alt="Line Icon"
          style={{ filter: "invert(1)" }}
        />
      </IconButton>
    </Container>
  );
};

export default LoginPage;
