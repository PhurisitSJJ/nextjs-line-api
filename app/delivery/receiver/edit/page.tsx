'use client';

import { Box, Button, Container, Switch, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EditAddressReceiverPage = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(true);

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [locationInfo, setLocationInfo] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setName('ขนมปัง ฟาร์มเฮ้า');
        setTel('0891237081');
        setAddressDetail('1/10 บ้านทรายทอง');
        setLocationInfo('ตำบลทรายแดง, อำเภอทรายเข้าตา, จังหวัดกรุงเทพมหานคร, 10000');
        setType('ที่ทำงาน');
    }, []);

    const handleBack = () => {
        router.push('/delivery/receiver');
    }

    const handleEditAddress = () => {
        sessionStorage.setItem("selectedAddress", locationInfo);
        router.push("/delivery/receiver/edit/info");
    }

    const handleConfrimAddress = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/delivery/receiver');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'top', height: '100vh', px: 2, }}>
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
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                        / แก้ไขที่อยู่
                    </Typography>
                </Box>

                <form onSubmit={handleConfrimAddress}>
                    <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            sx={{
                                mb: 2,
                                width: "100%",
                                maxWidth: "400px",
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: 'Anuphan',
                                    fontSize: "14px",
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
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            type="tel"
                            sx={{
                                mb: 2,
                                width: "100%",
                                maxWidth: "400px",
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: 'Anuphan',
                                    fontSize: "14px",
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
                            value={addressDetail}
                            onChange={(e) => setAddressDetail(e.target.value)}
                            type="text"
                            sx={{
                                mb: 2,
                                width: "100%",
                                maxWidth: "400px",
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: 'Anuphan',
                                    fontSize: "14px",
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
                            value={locationInfo}
                            onChange={(e) => setLocationInfo(e.target.value)}
                            placeholder="จังหวัด, เขต/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์"
                            type="text"
                            onClick={handleEditAddress}
                            InputProps={{ readOnly: true }}
                            sx={{
                                mb: 2,
                                width: "100%",
                                maxWidth: "400px",
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: "Anuphan",
                                    fontSize: "14px",
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
                        <Typography variant="body1"
                            sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
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
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: "Anuphan", }}>
                            เลือกที่อยู่เป็น :
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1 }}>
                            {["ที่ทำงาน", "บ้าน"].map((label) => (
                                <Button
                                    key={label}
                                    onClick={() => setType(label)}
                                    variant="contained"
                                    sx={{
                                        maxWidth: "90px",
                                        height: "30px",
                                        borderRadius: "8px",
                                        backgroundColor: type === label ? "#BF0005" : "#FFF",
                                        color: type === label ? "#FFF" : "#BF0005",
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
                </form>
            </Container>
        </>
    );
};

export default EditAddressReceiverPage;