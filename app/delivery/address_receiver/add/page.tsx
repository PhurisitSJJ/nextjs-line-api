'use client';

import { Box, Button, Container, Switch, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const AddAddressReceiverPage = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(true);
    const [selected, setSelected] = useState("บ้าน");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const selectedAddress = sessionStorage.getItem("selectedAddress");
        if (selectedAddress) {
            setAddress(selectedAddress);
        }
    }, []);


    const handleBack = () => {
        sessionStorage.removeItem("selectedAddress"); // จำลอง กรณีกดย้อนกลับ 
        router.push('/delivery/address_receiver');
    }

    // const handleConfrimAddress = () => {
    //     sessionStorage.removeItem("selectedAddress");
    //     router.push('/delivery/address_receiver');
    // }

    const handleConfrimAddress = (e: React.FormEvent) => {
        sessionStorage.removeItem("selectedAddress"); // จำลอง กรณีที่เพิ่มข้อมูลแล้ว 
        e.preventDefault();
        router.push('/delivery/address_receiver');
    };

    const handleAddAddress = () => {
        sessionStorage.setItem("selectedAddress", address); 
        router.push('/delivery/address_receiver/address');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'top', height: '100vh', px: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 2 }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBack}
                        sx={{
                            color: "#BF0005",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            "&:hover": { color: "#2200FF" },
                            "&:hover .MuiTypography-root": { color: "#2200FF" },
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "#BF0005", fontSize: "16px", fontFamily: 'Anuphan', }}>
                            ย้อนกลับ
                        </Typography>
                    </Button>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                        / เพิ่มที่อยู่ผู้รับใหม่
                    </Typography>
                </Box>
                <form onSubmit={handleConfrimAddress}>
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
                            value={address}
                            placeholder="จังหวัด, เขต/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์"
                            type="text"
                            onClick={handleAddAddress}
                            InputProps={{ readOnly: true }}
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

                    <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%", maxWidth: "400px" }}>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                            เลือกเป็นที่อยู่ตั้งต้น :
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
                    <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "400px" }}>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: "Anuphan", }} >
                            เลือกที่อยู่เป็น :
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1 }}>
                            {["ที่ทำงาน", "บ้าน"].map((label) => (
                                <Button
                                    key={label}
                                    onClick={() => setSelected(label)}
                                    variant="contained"
                                    sx={{
                                        width: "80px",
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
                        // onClick={handleConfrimAddress}
                        >
                            เพิ่มที่อยู่
                        </Button>
                    </Box>
                    </form>
            </Container>
        </>
    );
};

export default AddAddressReceiverPage;