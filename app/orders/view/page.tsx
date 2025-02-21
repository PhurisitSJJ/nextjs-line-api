'use client';

import { Box, Card, Container, Divider, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";


const ViewDeliveryPage = () => {

    const productList = [
        { name: "ขนม", size: "30x30x40", quantity: 1, weight: "20.02", unit: "กล่อง" },
        { name: "พริกหยวก", size: "40x40x50", quantity: 2, weight: "40.5", unit: "กล่อง" },
    ];

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

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 1, gap: 1 }}>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '100px' }}>
                        ชื่อผู้ส่ง :
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            flex: 1
                        }}
                    >
                        สมชาย เพื่อนสมปอง
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 1, gap: 1 }}>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '100px' }}>
                        เบอร์โทรศัพท์ :
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            flex: 1
                        }}
                    >
                        0981237081
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 1 }}>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '100px' }}>
                        ที่อยู่ :
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            flex: 1
                        }}
                    >
                        123/65 บ้านวังวง ต.วังทอง อ.เมือง จ.เชียงใหม่ 50100
                    </Typography>
                </Box>

                <Divider sx={{ mt: 2, mb: 2, border: "1px solid #BF0005" }} />

                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        color: "#6B6B6B",
                        fontSize: "20px",
                        fontFamily: 'Anuphan'
                    }}
                >
                    ข้อมูลผู้รับ
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 1, gap: 1 }}>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '100px' }}>
                        ชื่อผู้รับ :
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            flex: 1
                        }}
                    >
                        ขนมปัง ฟาร์มเฮ้า
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 1, gap: 1 }}>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '100px' }}>
                        เบอร์โทรศัพท์ :
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            flex: 1
                        }}
                    >
                        0895687897
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 1 }}>
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', minWidth: '100px' }}>
                        ที่อยู่ :
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontFamily: 'Anuphan',
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            flex: 1
                        }}
                    >
                        1/10 บ้านทรายทอง ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000
                    </Typography>
                </Box>


                <Divider sx={{ mt: 2, mb: 2, border: "1px solid #BF0005" }} />

                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        color: "#6B6B6B",
                        fontSize: "20px",
                        fontFamily: 'Anuphan'
                    }}
                >
                    รายการสินค้า
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 5 }}>
                    {productList.map((product, index) => (
                        <Card
                            key={index}
                            sx={{ p: 2, border: "1px solid #D2D2D2", borderRadius: "8px", boxShadow: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            // onClick={handleEditOrder}
                        >
                            <Box>
                                <Typography variant="h6" sx={{ fontFamily: "Anuphan", color: "blue", fontWeight: "bold", fontSize: "18px", mb: 0.2 }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                    ขนาด (Cm.): {product.size}
                                </Typography>
                            </Box>

                            <Box sx={{ alignItems: "left" }}>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px", mb: 1 }}>
                                    จำนวน: {product.quantity} {product.unit}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "14px" }}>
                                    น้ำหนัก (Kg.): {product.weight}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>

            </Container>
        </>
    );
};

export default ViewDeliveryPage;