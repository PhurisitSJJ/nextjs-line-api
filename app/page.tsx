'use client';

import { Button, Typography, Container, Box } from "@mui/material";
import React from "react"; 
import Link from "next/link";


const HomePage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h6" color="textSecondary" paragraph>
        ทดสอบ Line API
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Link href="/login_page" passHref>
          <Button variant="contained" color="primary" size="large">
            เข้าสู่ระบบ
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default HomePage;
