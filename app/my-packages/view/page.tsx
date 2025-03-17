'use client';

import { Box, Button, Card, Container, Divider, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const ViewMyPackageDetailPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/my-packages');
    }

    const productList = [
        { name: "ขนมปังปิ๊งใส้สังขยา", size: "30x30x40", quantity: 1, weight: "20.02", unit: "แพค" },
        { name: "พริกหยวก", size: "40x40x50", quantity: 2, weight: "40.5", unit: "กล่อง" },
        { name: "น้ำส้ม", size: "40x40x50", quantity: 5, weight: "40.5", unit: "กล่อง" },
        { name: "มะม่วง", size: "40x40x50", quantity: 10, weight: "40.5", unit: "ตะกร้า" },
        { name: "ไก่ย่าง", size: "40x40x50", quantity: 5, weight: "40.5", unit: "ตัว" },
    ];

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
                    <Typography variant="h5" sx={{ color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan' }}>
                        / รายละเอียดบิล
                    </Typography>
                </Box>

                <Box sx={{ mb: 1, p: 2, width: "100%", maxWidth: "400px", pb: 5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 1, gap: 2 }}>
                            <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "17px", fontFamily: 'Anuphan' }}>
                                วันที่ : 20/2/2568
                            </Typography>
                        </Box>
                        <Typography variant="body1"
                            sx={{
                                color: "#6B6B6B", fontSize: "18px", fontFamily: 'Anuphan', cursor: "pointer", transition: "all 0.3s", p: 0.5, borderRadius: "8px",
                                "&:hover": { color: "#000", backgroundColor: "#D9D9D9" }
                            }}
                            onClick={() => console.log("Test Click Coppy!!!")}
                        >
                            <ContentCopyIcon />
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 1, gap: 2 }}>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                            <ReceiptIcon />
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                            R065056TH
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 1, gap: 2 }}>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', }}>
                            <PersonIcon />
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                            (ผู้รับ) ขนมปัง ฟาร์มเฮ้า
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', mb: 1, gap: 2 }}>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', }}>
                            <CallIcon />
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        0895687897
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 2 }}>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', }}>
                            <PlaceIcon />
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan', whiteSpace: "normal", wordBreak: "break-word", flex: 1 }}>
                        1/10 บ้านทรายทอง ต.ทรายแดง อ.ทรายเข้าตา จ.กรุงเทพมหานคร 10000
                        </Typography>
                    </Box>

                    <Divider sx={{ mt: 1.5, mb: 1.5 }} />

                    <Typography variant="body1" sx={{ color: "#6B6B6B", fontSize: "16px", fontFamily: 'Anuphan' }}>
                        รายการสินค้า
                    </Typography>
                    
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        {productList.map((product, index) => (
                            <Box key={index} sx={{ p: 0.5, display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "350px", gap: 8 }}>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", textAlign: "center", flex: 1 }}>
                                    {product.quantity}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Anuphan", color: "#6B6B6B", fontSize: "16px", textAlign: "left", flex: 1, whiteSpace: "nowrap" }}>
                                    {product.unit}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default ViewMyPackageDetailPage;