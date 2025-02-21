'use client';

import { Box, Button, Container, Switch, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { useState } from "react";
import { useRouter } from "next/navigation";


const AddAddressReceiverPage = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(true);
    const [selected, setSelected] = useState("บ้าน");

    const handleConfrimAddress = () => {
        router.push('/delivery/address_receiver');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

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
                    px: 2,
                }}>

                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            color: "#6B6B6B",
                            fontSize: "20px",
                            fontFamily: 'Anuphan'
                        }}
                    >
                        เพิ่มที่อยู่ใหม่
                    </Typography>
                </Box>
                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
                                backgroundColor: "#FFF",
                                transition: "background-color 0.3s ease",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                    <TextField
                        placeholder="บ้านเลขที่, ซอย, หมู่, ถนน"
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

                    <TextField
                        placeholder="จังหวัด, เขต/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์"
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
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", mb: 1 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan'
                        }}
                    >
                        เลือกเป็นที่อยู่เริ่มต้น :
                    </Typography>

                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "#009900",
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                backgroundColor: "#33FF33",
                            },
                        }}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: "Anuphan",
                        }}
                    >
                        เลือกที่อยู่เป็น :
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1}}>
                        {["ที่ทำงาน", "บ้าน"].map((label) => (
                            <Button
                                key={label}
                                onClick={() => setSelected(label)}
                                variant="contained"
                                sx={{
                                    maxWidth: "90px",
                                    height: "30px",
                                    borderRadius: "8px",
                                    backgroundColor: selected === label ? "#BF0005" : "#FFF",
                                    color: selected === label ? "#FFF" : "#BF0005",
                                    border: "1px solid #BF0005",
                                    fontFamily: "Anuphan",
                                    fontSize: "12px",
                                    "&:hover": {
                                        backgroundColor: "#BF0005",
                                        color: "#FFF",
                                    },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box>
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
                    onClick={handleConfrimAddress}
                    >
                        ยืนยัน
                    </Button>
                </Box>

            </Container>
        </>
    );
};

export default AddAddressReceiverPage;