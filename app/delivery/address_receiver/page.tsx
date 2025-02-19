'use client';

import { Box, Card, Chip, Container, IconButton, TextField, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";

const AddressReceiverPage = () => {
    const router = useRouter();

    const productList = [
        { name: "ขนมปัง ฟาร์มเฮ้า", tel: "0995512020", addressDetail: "123/65 บ้านวังวง", locationInfo: "ต.วังทอง อ.เมือง จ.เชียงใหม่ 50100", type: "บ้าน"},
        { name: "ขนมปัง ฟาร์มเฮ้า", tel: "0891237081", addressDetail: "1/10 บ้านทรายทอง", locationInfo: " ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000", type: "บ้าน"},
    ];

    const handleAddAddressReceiver = () => {
        router.push('/delivery/address_receiver/add')
    }

    const handleEditAddressReceiver = () => {
        router.push('/delivery/address_receiver/edit')
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
                            ที่อยู่ของผู้รับ
                        </Typography>

                        <Box
                            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                            onClick={handleAddAddressReceiver}>
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
                            onClick={handleEditAddressReceiver}
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
                                <Chip
                                    label={product.type}
                                    sx={{
                                        width: "70px",
                                        height: "30px",
                                        borderRadius: "8px",
                                        color: "#BF0005",
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

export default AddressReceiverPage;