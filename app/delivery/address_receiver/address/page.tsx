"use client";

import { useState, useEffect } from "react";
import { Box, Button, Container, Divider, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

const provinces = [
    {
        name: "จังหวัดกรุงเทพมหานคร",
        districts: [
            { name: "เขตบางรัก", subdistricts: [{ name: "แขวงมหาพฤฒาราม", zipcode: "10500" }, { name: "แขวงสีลม", zipcode: "10500" }] },
            { name: "เขตบางขุนเทียน", subdistricts: [{ name: "แขวงแสมดำ", zipcode: "10150" }, { name: "แขวงท่าข้าม", zipcode: "10150" }] },
            { name: "เขตบางบอน", subdistricts: [{ name: "แขวงบางบอน", zipcode: "10150" }] },
            { name: "เขตพระนคร", subdistricts: [{ name: "แขวงพระบรมมหาราชวัง", zipcode: "10200" }, { name: "แขวงวังบูรพาภิรมย์", zipcode: "10200" }] },
            { name: "เขตปทุมวัน", subdistricts: [{ name: "แขวงปทุมวัน", zipcode: "10330" }, { name: "แขวงรองเมือง", zipcode: "10330" }] },
            { name: "เขตลาดกระบัง", subdistricts: [{ name: "แขวงลาดกระบัง", zipcode: "10520" }, { name: "แขวงคลองสองต้นนุ่น", zipcode: "10520" }] },
            { name: "เขตบางกะปิ", subdistricts: [{ name: "แขวงหัวหมาก", zipcode: "10240" }, { name: "แขวงคลองจั่น", zipcode: "10240" }] },
            { name: "เขตดอนเมือง", subdistricts: [{ name: "แขวงดอนเมือง", zipcode: "10210" }, { name: "แขวงสนามบิน", zipcode: "10210" }] }
        ]
    },
    {
        name: "จังหวัดเชียงใหม่",
        districts: [
            { name: "อำเภอเมืองเชียงใหม่", subdistricts: [{ name: "ตำบลศรีภูมิ", zipcode: "50200" }, { name: "ตำบลสุเทพ", zipcode: "50200" }] },
            { name: "อำเภอหางดง", subdistricts: [{ name: "ตำบลหางดง", zipcode: "50230" }, { name: "ตำบลหนองควาย", zipcode: "50230" }] },
            { name: "อำเภอสารภี", subdistricts: [{ name: "ตำบลสารภี", zipcode: "50140" }, { name: "ตำบลหนองแฝก", zipcode: "50140" }] },
            { name: "อำเภอแม่ริม", subdistricts: [{ name: "ตำบลริมใต้", zipcode: "50180" }, { name: "ตำบลแม่แรม", zipcode: "50180" }] },
            { name: "อำเภอแม่แตง", subdistricts: [{ name: "ตำบลแม่แตง", zipcode: "50150" }, { name: "ตำบลสันมหาพน", zipcode: "50150" }] },
            { name: "อำเภอสันทราย", subdistricts: [{ name: "ตำบลหนองแหย่ง", zipcode: "50210" }, { name: "ตำบลสันทรายน้อย", zipcode: "50210" }] },
            { name: "อำเภอสันกำแพง", subdistricts: [{ name: "ตำบลสันกำแพง", zipcode: "50130" }, { name: "ตำบลออนใต้", zipcode: "50130" }] }
        ]
    },
    {
        name: "จังหวัดพะเยา",
        districts: [
            { name: "อำเภอเมืองพะเยา", subdistricts: [{ name: "ตำบลท่าวังทอง", zipcode: "56000" }, { name: "ตำบลแม่ปืม", zipcode: "56000" }, { name: "ตำบลบ้านต๋อม", zipcode: "56000" }] },
            { name: "อำเภอจุน", subdistricts: [{ name: "ตำบลจุน", zipcode: "56150" }, { name: "ตำบลเวียงลอ", zipcode: "56150" }] },
            { name: "อำเภอเชียงคำ", subdistricts: [{ name: "ตำบลเชียงคำ", zipcode: "56110" }, { name: "ตำบลบ้านทราย", zipcode: "56110" }, { name: "ตำบลฝายกวาง", zipcode: "56110" }] },
            { name: "อำเภอเชียงม่วน", subdistricts: [{ name: "ตำบลเชียงม่วน", zipcode: "56160" }] },
            { name: "อำเภอดอกคำใต้", subdistricts: [{ name: "ตำบลบ้านถ้ำ", zipcode: "56120" }, { name: "ตำบลห้วยลาน", zipcode: "56120" }, { name: "ตำบลหนองหล่ม", zipcode: "56120" }] },
            { name: "อำเภอปง", subdistricts: [{ name: "ตำบลหนองงิม", zipcode: "56140" }, { name: "ตำบลปง", zipcode: "56140" }, { name: "ตำบลแม่ยม", zipcode: "56140" }, { name: "ตำบลควร", zipcode: "56140" }, { name: "ตำบลขุนควร", zipcode: "56140" }] },
            { name: "อำเภอภูซาง", subdistricts: [{ name: "ตำบลสบบง", zipcode: "56110" }] },
            { name: "อำเภอแม่ใจ", subdistricts: [{ name: "ตำบลแม่ใจ", zipcode: "56130" }, { name: "ตำบลบ้านเหล่า", zipcode: "56130" }, { name: "ตำบลรวมใจพัฒนา", zipcode: "56130" }, { name: "ตำบลป่าแฝก", zipcode: "56130" }] },
            { name: "อำเภอภูกามยาว", subdistricts: [{ name: "ตำบลดงเจน", zipcode: "56000" }] }
        ]
    }

];

const SelectAddressPage = () => {
    const router = useRouter();
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedSubdistrict, setSelectedSubdistrict] = useState("");
    const [zipcodes, setZipcodes] = useState<string[]>([]);
    const [selectedZipcode, setSelectedZipcode] = useState("");

    const [searchText, setSearchText] = useState("");

    const handleBack = () => {
        if (selectedZipcode) {
            setSelectedZipcode("");
        } else if (selectedSubdistrict) {
            setSelectedSubdistrict("");
            setZipcodes([]);
        } else if (selectedDistrict) {
            setSelectedDistrict("");
        } else if (selectedProvince) {
            setSelectedProvince("");
        } else {
            router.back();
        }
    };

    useEffect(() => {
        if (selectedProvince && selectedDistrict && selectedSubdistrict && selectedZipcode) {
            const fullAddress = `${selectedProvince}, ${selectedDistrict}, ${selectedSubdistrict}, ${selectedZipcode}`;
            sessionStorage.setItem("selectedAddress", fullAddress);

            router.replace(`/delivery/address_receiver/add`);
        }
    }, [selectedZipcode, router, selectedProvince, selectedDistrict, selectedSubdistrict]);

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, px: 2, height: "100vh", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
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
                        <Typography variant="h5" sx={{ color: "#BF0005", fontSize: "16px", fontFamily: 'Anuphan' }}>
                            ย้อนกลับ
                        </Typography>
                    </Button>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "20px", fontFamily: 'Anuphan' }}>
                        / เลือกข้อมูล
                    </Typography>
                </Box>

                <Box sx={{ mt: 2,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TextField
                        placeholder="จังหวัด, เขค/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{
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
                        InputProps={{
                            endAdornment: searchText && (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setSearchText("")} sx={{ color: "#BF0005", "&:hover": { color: "#D53F44" } }}>
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box>
                    {!selectedProvince ? (
                        <List>
                            {provinces
                                .filter(province => province.name.includes(searchText))
                                .map((province, index) => (
                                    <React.Fragment key={province.name}>
                                        <ListItem sx={{ mb: "-10px", mt: "-10px" }}>
                                            <ListItemButton onClick={() => {setSelectedProvince(province.name); setSearchText("");}}>
                                                <ListItemText>
                                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                                        {province.name}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        {index < provinces.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                    </React.Fragment>
                                ))}
                        </List>
                    ) : !selectedDistrict ? (
                        <List>
                            {provinces.find(p => p.name === selectedProvince)?.districts
                                .filter(district => district.name.includes(searchText))
                                .map((district, index, arr) => (
                                    <React.Fragment key={district.name}>
                                        <ListItem sx={{ mb: "-10px", mt: "-10px" }}>
                                            <ListItemButton onClick={() => {setSelectedDistrict(district.name); setSearchText("");}}>
                                                <ListItemText>
                                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                                        {district.name}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        {index < arr.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                    </React.Fragment>
                                ))}
                        </List>
                    ) : !selectedSubdistrict ? (
                        <List>
                            {provinces.find(p => p.name === selectedProvince)
                                ?.districts.find(d => d.name === selectedDistrict)
                                ?.subdistricts.filter(subdistrict => subdistrict.name.includes(searchText))
                                .map((subdistrict, index, arr) => (
                                    <React.Fragment key={subdistrict.name}>
                                        <ListItem sx={{ mb: "-10px", mt: "-10px" }}>
                                            <ListItemButton
                                                onClick={() => {
                                                    setSelectedSubdistrict(subdistrict.name);
                                                    setZipcodes([subdistrict.zipcode]);
                                                    setSearchText("");
                                                }}
                                            >
                                                <ListItemText>
                                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                                        {subdistrict.name}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        {index < arr.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                    </React.Fragment>
                                ))}
                        </List>
                    ) : (
                        <List>
                            {zipcodes.filter(zipcode => zipcode.includes(searchText)).map((zipcode, index, arr) => (
                                <React.Fragment key={zipcode}>
                                    <ListItem sx={{ mb: "-10px", mt: "-10px" }}>
                                        <ListItemButton onClick={() => setSelectedZipcode(zipcode)}>
                                            <ListItemText>
                                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                                    {zipcode}
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    {index < arr.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                </React.Fragment>
                            ))}
                        </List>
                    )}
                </Box>

            </Container>
        </>
    );
};

export default SelectAddressPage;
