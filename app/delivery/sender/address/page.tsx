"use client";

import { useState, useEffect } from "react";
import { Box, Button, Container, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, TextField, Typography, Tabs, Tab, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import { provinces } from "@/app/ui/address/provincesData";
import React from "react";

const SelectAddressPage = () => {
    const router = useRouter();
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedSubdistrict, setSelectedSubdistrict] = useState("");
    const [selectedZipcode, setSelectedZipcode] = useState("");
    const [searchText, setSearchText] = useState("");

    const [tabIndex, setTabIndex] = useState(0);

    const handleBack = () => {
        sessionStorage.removeItem("selectedAddress");
        router.back();
    };

    useEffect(() => {
        if (selectedProvince && selectedDistrict && selectedSubdistrict && selectedZipcode) {
            const fullAddress = `${selectedProvince}, ${selectedDistrict}, ${selectedSubdistrict}, ${selectedZipcode}`;
            sessionStorage.setItem("selectedAddress", fullAddress);
            router.replace(`/delivery/sender/add`);
        }
    }, [selectedZipcode, router, selectedProvince, selectedDistrict, selectedSubdistrict]);

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, px: 2, height: "100vh", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", mb: 2 }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBack}
                        sx={{
                            color: "#BF0005",
                            fontSize: "16px",
                            fontFamily: "Anuphan",
                            "&:hover": { color: "#2200FF" },
                            "&:hover .MuiTypography-root": { color: "#2200FF" },
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "#BF0005", fontSize: "16px", fontFamily: "Anuphan", }}>
                            ย้อนกลับ
                        </Typography>
                    </Button>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: "Anuphan" }}>
                        / เลือกข้อมูล
                    </Typography>
                </Box>

                <Box sx={{ mb: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TextField
                        placeholder="ค้นหา จังหวัด, อำเภอ, ตำบล, รหัสไปรษณีย์"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "Anuphan",
                                fontSize: "14px",
                                height: "50px",
                                borderRadius: "8px",
                                backgroundColor: "#FFF"
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                backgroundColor: "#f0f0f0"
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

                <Tabs
                    value={tabIndex}
                    onChange={(e, newIndex) => setTabIndex(newIndex)}
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "50px",
                        "& .Mui-selected": {
                            color: "#BF0005",
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#BF0005",
                        },
                    }}
                >
                    <Tab label="จังหวัด" sx={{ fontFamily: "Anuphan", color: "#000", fontSize: "13px", fontWeight: tabIndex === 0 ? "bold" : "normal" }} />
                    <Tab label="เขต/อำเภอ" disabled={!selectedProvince} sx={{ fontFamily: "Anuphan", color: "#000", fontSize: "13px", fontWeight: tabIndex === 1 ? "bold" : "normal" }} />
                    <Tab label="แขวง/ตำบล" disabled={!selectedDistrict} sx={{ fontFamily: "Anuphan", color: "#000", fontSize: "13px", fontWeight: tabIndex === 2 ? "bold" : "normal" }} />
                    <Tab label="รหัสไปรษณีย์" disabled={!selectedSubdistrict} sx={{ fontFamily: "Anuphan", color: "#000", fontSize: "13px", fontWeight: tabIndex === 3 ? "bold" : "normal" }} />
                </Tabs>

                <Box sx={{ pb: 5 }}>
                    <List sx={{ mt: 1, maxHeight: "400px", overflowY: "auto" }}>
                        {tabIndex === 0 &&
                            provinces
                                .filter((province) => province.name.includes(searchText))
                                .map((province, index) => (
                                    <React.Fragment key={province.name}>
                                        <ListItem sx={{ mb: "-8px", mt: "-8px" }}>
                                            <ListItemButton
                                                onClick={() => {
                                                    setSelectedProvince(province.name);
                                                    setTabIndex(1);
                                                }}
                                            >
                                                <ListItemText>
                                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                                        {province.name}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        {index < provinces.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                    </React.Fragment>
                                ))}

                        {tabIndex === 1 &&
                            provinces
                                .find((p) => p.name === selectedProvince)
                                ?.districts.filter((district) => district.name.includes(searchText))
                                .map((district, index, arr) => (
                                    <React.Fragment key={district.name}>
                                        <ListItem sx={{ mb: "-8px", mt: "-8px" }}>
                                            <ListItemButton
                                                onClick={() => {
                                                    setSelectedDistrict(district.name);
                                                    setTabIndex(2);
                                                }}
                                            >
                                                <ListItemText>
                                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                                        {district.name}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        {index < arr.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                    </React.Fragment>
                                ))}

                        {tabIndex === 2 &&
                            provinces
                                .find((p) => p.name === selectedProvince)
                                ?.districts.find((d) => d.name === selectedDistrict)
                                ?.subdistricts.filter((subdistrict) => subdistrict.name.includes(searchText))
                                .map((subdistrict, index, arr) => (
                                    <React.Fragment key={subdistrict.name}>
                                        <ListItem sx={{ mb: "-8px", mt: "-8px" }}>
                                            <ListItemButton
                                                onClick={() => {
                                                    setSelectedSubdistrict(subdistrict.name);
                                                    setTabIndex(3);
                                                }}
                                            >
                                                <ListItemText>
                                                    <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                                        {subdistrict.name}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        {index < arr.length - 1 && <Divider sx={{ width: "100%", maxWidth: "400px" }} />}
                                    </React.Fragment>
                                ))}

                        {tabIndex === 3 &&
                            provinces
                                .find((p) => p.name === selectedProvince)
                                ?.districts.find((d) => d.name === selectedDistrict)
                                ?.subdistricts.filter((subdistrict) => subdistrict.name.includes(selectedSubdistrict))
                                .map((subdistrict) => (
                                    <ListItem key={subdistrict.zipcode} sx={{ mb: "-8px", mt: "-8px" }}>
                                        <ListItemButton
                                            onClick={() => {
                                                setSelectedZipcode(subdistrict.zipcode);
                                            }}
                                        >
                                            <ListItemText>
                                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                                    {subdistrict.zipcode}
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                    </List>
                </Box>
            </Container>
        </>
    );
};

export default SelectAddressPage;

