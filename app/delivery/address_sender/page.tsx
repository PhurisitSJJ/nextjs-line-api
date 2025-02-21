'use client';

import { Box, Card, Chip, Container, IconButton, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";

const AddressSenderPage = () => {
    const router = useRouter();

    const productList = [
        { name: "สมหญิง สุขใจ", tel: "0891237081", addressDetail: "123/65 บ้านสุขใจ", locationInfo: "ต.แกดำ อ.แกดำ จ.มหาสารคาม 44190", type: "บ้าน" },
        { name: "สมหญิง สุขใจ", tel: "0891237081", addressDetail: "1/10 บ้านทรายทอง", locationInfo: "ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000", type: "ที่ทำงาน" },
        { name: "สมชาย ใจดี", tel: "0999995566", addressDetail: "99/9 บ้านนี้อยู่แล้วรวย", locationInfo: "ต.นาปรัง อ.ปง จ.พะเยา 56140", type: "บ้าน" },
    ];

    const handleAddAddressSender = () => {
        router.push('/delivery/address_sender/add')
    }

    const handleEditAddressSender = () => {
        router.push('/delivery/address_sender/edit')
    }


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

                <Box sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 1.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#6B6B6B",
                                fontSize: "20px",
                                fontFamily: 'Anuphan'
                            }}
                        >
                            ที่อยู่ของผู้ส่ง
                        </Typography>

                        <Box
                            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                            onClick={handleAddAddressSender}>
                            <IconButton sx={{ color: "#BF0005", }}>
                                <AddCircleOutlineIcon sx={{ fontSize: "15px" }} />
                            </IconButton>
                            <Typography variant="h5"
                                sx={{
                                    color: "#BF0005",
                                    fontSize: "20px",
                                    fontFamily: "Anuphan"
                                }}>
                                เพิ่ม
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {productList.map((product, index) => (
                        <Card
                            key={index}
                            sx={{
                                p: 2,
                                border: "1px solid #D2D2D2",
                                borderRadius: "12px",
                                boxShadow: 2,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                cursor: "pointer",
                            }}
                            onClick={handleEditAddressSender}
                        >
                            <Box>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px" }}>
                                    {product.name} | {product.tel}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", mt: "5px" }}>
                                    {product.addressDetail}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", mt: "5px" }}>
                                    {product.locationInfo}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "5px" }}>
                                {/* <Chip
                                    label={"ค่าเริ่มต้น"}
                                    sx={{
                                        width: "90px",
                                        height: "30px",
                                        borderRadius: "8px",
                                        color: "#BF0005",
                                        border: "1px solid #BF0005",
                                        fontFamily: "Anuphan",
                                        fontSize: "12px",
                                    }}
                                /> */}
                                <Chip
                                    label={product.type}
                                    sx={{
                                        width: "70px",
                                        height: "30px",
                                        borderRadius: "8px",
                                        color: "#BF0005",
                                        backgroundColor: "#FFF",
                                        border: "1px solid #BF0005",
                                        fontFamily: "Anuphan",
                                        fontSize: "12px",
                                    }}
                                />
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Container>
        </>
    );
};

export default AddressSenderPage;