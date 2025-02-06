'use client';

import { Button, Card, Container, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AgreeDataPage = () => {
    const router = useRouter();
    const [agree, setAgree] = useState<string | null>(null);

    const handleConfirm = () => {
        if (agree === "agree") {
            router.push('/home');
        } else {
            alert("คุณต้องยินยอมก่อนจึงจะสามารถดำเนินการต่อได้");
        }
    }

    return (
        <Container maxWidth="xs" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            px: 2,
            overflowY: "auto",
        }}>
            <Card sx={{
                p: 2,
                bgcolor: '#F5F5F5',
                borderRadius: "8px",
                textAlign: 'center',
                width: "100%",
                maxWidth: "400px",
                overflowY: "auto",  // เปิดให้สามารถเลื่อนขึ้นลงได้
            }}>
                
                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        color: "#333",
                        fontSize: "16px",
                        fontWeight: "bold",
                    }}
                >
                    การยินยอมเปิดเผยข้อมูล
                </Typography>


                <Typography
                    variant="body1"
                    sx={{
                        color: "#6B6B6B",
                        fontSize: "12px",
                        textAlign: "justify",   
                        hyphens: "auto",        
                        wordBreak: "break-word", 
                        lineHeight: "1.7",      
                    }}
                >
                    ข้อกำหนดและเงื่อนไข <br />
                    ข้อกำหนดและเงื่อนไขต่างๆ ดังต่อไปนี้ แสดงข้อกำหนดและเงื่อนไขในการใช้งานเว็บไซต์
                    https://www.thaicom.net ของ บริษัท ไทยคม จำกัด (มหาชน) ในการเข้าชมเว็บไซต์นี้ บริษัทฯ ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขเหล่านี้
                    โปรดระงับใช้เว็บไซต์ต่อไปหากคุณไม่ยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในหน้านี้
                    คำที่ใช้ต่อไปนี้ ใช้กับข้อกำหนดและเงื่อนไข คำชี้แจงสิทธิ์ส่วนบุคคล ประกาศความรับผิดชอบ และข้อตกลงทั้งหมด
                    คำว่า “ลูกค้า” “คุณ” และ “ของคุณ” หมายถึงบุคคลที่เข้าสู่เว็บไซต์นี้ และยอมรับข้อกำหนดและเงื่อนไขของบริษัท
                    “บริษัท” “ตัวเราเอง” “เรา” “ของเรา” และ “พวกเรา” หมายถึง บริษัท ไทยคม จำกัด (มหาชน)
                    “บุคคล” หรือ “เรา” หมายถึงทั้งลูกค้าและบริษัทเอง ข้อกำหนดทั้งหมดอ้างถึงข้อเสนอการยอมรับ
                    และการพิจารณาการชำระเงินที่จำเป็นเพื่อดำเนินการกระบวนการช่วยเหลือลูกค้าของเราในลักษณะที่เหมาะสมที่สุด
                    เพื่อวัตถุประสงค์ที่ชัดเจนในการตอบสนองความต้องการของลูกค้า ในส่วนที่เกี่ยวกับการให้บริการตามที่ระบุไว้ของบริษัท
                    และอยู่ภายใต้กฎหมายที่มีอยู่ในประเทศไทย เมื่อคุณเข้าชมเว็บไซต์ www.thaicom.net
                    คุณยินยอมที่จะใช้คุกกี้ตามข้อตกลงกับนโยบายรักษาข้อมูลส่วนบุคคลของ บริษัท ไทยคม จำกัด (มหาชน)
                    เว็บไซต์ที่มีการแลกเปลี่ยนข้อมูลส่วนใหญ่ใช้คุกกี้ เพื่อบันทึกรายละเอียดของผู้ใช้สำหรับการเข้าชมแต่ละครั้ง
                    เว็บไซต์ของเรามีการใช้คุกกี้เพื่อเปิดใช้งานฟังก์ชันในบางพื้นที่ เพื่อให้ผู้ที่เข้าชมเว็บไซต์ของเราใช้งานได้ง่ายขึ้น
                </Typography>

                <FormControl component="fieldset" sx={{ mt: 4 }}>
                    <RadioGroup
                        row
                        value={agree}
                        onChange={(e) => setAgree(e.target.value)}
                    >
                        <FormControlLabel
                            value="agree"
                            control={<Radio color="primary" />}
                            label="ยินยอม"
                        />
                        <FormControlLabel
                            value="disagree"
                            control={<Radio color="primary" />}
                            label="ไม่ยินยอม"
                        />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 1,
                        width: "100%",
                        maxWidth: "400px",
                        height: "50px",
                        borderRadius: "8px",
                        backgroundColor: "#BF0005",
                        "&:hover": { backgroundColor: "#D53F44", },
                    }}
                    onClick={handleConfirm}
                >
                    ยืนยัน
                </Button>
            </Card>
        </Container>
    );
};

export default AgreeDataPage;
