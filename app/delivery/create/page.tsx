'use client';

import { Box, Container, IconButton, TextareaAutosize, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import AddedIcon from '@mui/icons-material/Add';

const CreateDeliveryPage = () => {

    return (
        <>
            <MemberNavbar />
            <Container
                maxWidth="xs"
                sx={{
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'top',
                    height: '100vh',
                }}>

                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        color: "#6B6B6B",
                        fontSize: "20px",
                        fontFamily: 'Anuphan'
                    }}
                >
                    ข้อมูลผู้ส่ง
                </Typography>

                <Box
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'start',
                    }}>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 1,
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan'
                        }}
                    >
                        ชื่อผู้ส่ง
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                            mb: 0.5,
                        }}
                    >
                        <TextField
                            placeholder="ชื่อ - นามสกุล"
                            type="text"
                            sx={{
                                mb: 2,
                                width: "100%",
                                maxWidth: "400px",
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: 'Anuphan',
                                    height: "50px",
                                    borderRadius: "8px",
                                    backgroundColor: "#FFF",
                                    transition: "background-color 0.3s ease",
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    backgroundColor: "#f0f0f0",
                                },
                            }}
                        />
                        <IconButton sx={{ height: "50px", alignItems: 'center', }}>
                            <AddedIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'start',
                    }}>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 1,
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan'
                        }}
                    >
                        ที่อยู่
                    </Typography>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="กรุณากรอกข้อมูลให้ครบถ้วน"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            fontFamily: 'Anuphan',
                            fontSize: "16px",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            backgroundColor: "#FFF",
                            transition: "background-color 0.3s ease",
                            
                        }}
                        onFocus={(e) => e.target.style.backgroundColor = "#f0f0f0"} 
                        
                    />
                </Box>


            </Container>
        </>
    );
};

export default CreateDeliveryPage;