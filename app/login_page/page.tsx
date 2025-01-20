'use client'

import React, { useEffect } from 'react';
import {
    Container,
    Card,
    Typography,
    TextField,
    Button,
  } from '@mui/material';
import liff from '@line/liff';

const LoginPage = () => {

    useEffect(() => {
        liff.init({
            liffId: '2006781477-NzeKaxpL'
        })
    },[])

    const hendleLoginLineLiff = ()=>{
        try{
            liff.login()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ padding: 4, width: '100%', boxShadow: 3 }}>
        <Typography
          variant="h5"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', marginBottom: 2 }}
        >
          LOGIN
        </Typography>
        {/* <form onSubmit={handleLogin}> */}
          <TextField
            label="ชื่อผู้ใช้"
            type="username"
            fullWidth
            required
            margin="normal"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            InputProps={{ style: { backgroundColor: '#f0f0f0' } }}
          />

          <TextField
            label="รหัสผ่าน"
            type="password"
            fullWidth
            required
            margin="normal"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { backgroundColor: '#f0f0f0' } }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2, textTransform: 'none', fontWeight: 'bold', backgroundColor: '#1e88e5', '&:hover': { backgroundColor: '#1565c0' } }}
          >
            เข้าสู่ระบบ
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{marginTop: 2, textTransform: 'none', fontWeight: 'bold', backgroundColor: '#00c300', color: '#fff', '&:hover': { backgroundColor: '#009e00'} }}
            onClick={hendleLoginLineLiff}
          >
            Login with line 
          </Button>
        {/* </form> */}
      </Card>
    </Container>
    );
};

export default LoginPage;
