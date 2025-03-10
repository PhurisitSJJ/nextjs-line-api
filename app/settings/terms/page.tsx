'use client';

import { Box, Button, Card, Container, Typography } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";


const TermsAndConditionsPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/settings');
    }

    return (
        <>
            <MemberNavbar />
            <Container maxWidth="xs" sx={{ pt: 5, display: 'flex', flexDirection: 'column', height: '100vh', px: 2, pb: 5 }}>
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
                        / ข้อกำหนดและเงื่อนไขการบริการ
                    </Typography>
                </Box>

                <Card sx={{
                    p: 2,
                    bgcolor: '#F5F5F5',
                    borderRadius: "8px",
                    textAlign: 'center',
                    width: "100%",
                    maxWidth: "400px",
                    overflowY: "auto",
                }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#6B6B6B",
                            fontSize: "12px",
                            textAlign: "justify",
                            hyphens: "auto",
                            wordBreak: "break-word",
                            lineHeight: "1.7",
                            fontFamily: 'Anuphan',
                        }}
                    >
                        ข้อกำหนดและเงื่อนไขต่างๆ ดังต่อไปนี้<br />
                        แสดงข้อกำหนดและเงื่อนไขในการใช้งานเว็บไซต์ https://www.thaicom.net ของบริษัทไทยคม จำกัด (มหาชน)
                        ในการเข้าชมเว็บไซต์นี้ บริษัทฯ ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขเหล่านี้ โปรดระงับใช้ www.thaicom.net
                        ต่อไปหากคุณไม่ยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในหน้านี้
                        คำที่ใช้ต่อไปนี้ ใช้กับข้อกำหนดและเงื่อนไข คำชี้แจงสิทธิ์ส่วนบุคคล ประกาศความรับผิดชอบ และข้อตกลงทั้งหมด
                        คำว่า “ลูกค้า” “คุณ” และ “ของคุณ” หมายถึงบุคคลที่เข้าสู่เว็บไซต์นี้ และยอมรับข้อกำหนดและเงื่อนไขของบริษัท
                        “บริษัท” “ตัวเราเอง” “เรา” “ของเรา” และ “พวกเรา” หมายถึง บริษัท ไทยคม จำกัด (มหาชน) “บุคคล”
                        หรือ “เรา” หมายถึงทั้งลูกค้าและบริษัทเอง ข้อกำหนดทั้งหมดอ้างถึงข้อเสนอการยอมรับและการพิจารณาการชำระเงิน
                        ที่จำเป็นเพื่อดำเนินการกระบวนการช่วยเหลือลูกค้าของเรา ในลักษณะที่เหมาะสมที่สุด เพื่อวัตถุประสงค์ที่ชัดเจน
                        ในการตอบสนองความต้องการของลูกค้า ในส่วนที่เกี่ยวกับการให้บริการตามที่ระบุไว้ของบริษัท
                        และอยู่ภายใต้กฎหมายที่มีอยู่ในประเทศไทย การใช้คำต่างๆข้างต้นหรือคำอื่น ๆ ใด ไม่ว่าจะเป็นเอกพจน์และหรือพหูพจน์
                        การใช้ตัวอักษรพิมพ์ใหญ่และหรือเขา เธอหรือพวกเขาจะถูกนำมาใช้แทนกันและดังนั้นจึงอ้างถึงสิ่งเดียวกัน
                        คุกกี้
                        เราใช้คุ้กกี้ (cookies ) เมื่อคุณเข้าชม www.thaicom.net คุณยินยอมที่จะใช้คุกกี้ตามข้อตกลงกับนโยบายรักษาข้อมูลส่วนบุคคลของ บริษัท ไทยคม จำกัด (มหาชน)
                        เว็บไซต์ที่มีการแลกเปลี่ยนข้อมูลส่วนใหญ่ใช้คุกกี้ เพื่อบันทึกรายละเอียดของผู้ใช้สำหรับการเข้าชมแต่ละครั้ง เว็บไซต์ของเรามีการใช้คุกกี้เพื่อเปิดใช้งานฟังก์ชั่นในบางพื้นที่ เพื่อให้ผู้ที่เข้าชมเว็บไซต์ของเราใช้งานได้ง่ายขึ้น
                        การอนุญาต
                        เว้นแต่จะระบุไว้เป็นอย่างอื่น บริษัท ไทยคม จำกัด (มหาชน) และหรือผู้ให้อนุญาตเป็นเจ้าของสิทธิ์ในทรัพย์สินทางปัญญาสำหรับเนื้อหาทั้งหมดใน www.thaicom.net สงวนลิขสิทธิ์ทรัพย์สินทางปัญญาทั้งหมด คุณสามารถเข้าชม www.thaicom.net สำหรับการใช้งานส่วนตัวของคุณภายใต้ข้อ จำกัด ที่กำหนดไว้ในข้อกำหนดและเงื่อนไขเหล่านี้

                    </Typography>
                </Card>
            </Container>
        </>
    );
};

export default TermsAndConditionsPage;
