# *สำหรับแก้ไข*

- ในหน้า login ถ้า login ผ่าน line จะต้องหาวิธีเก็บข้อมูลบัญชี line (liff.getProfile และ liff.getIDToken) เนื่องจากถ้า login ผ่าน line จำเป็นต้องสมัครสมาชิกใหม่ (ในส่วนที่ทดลองดึงข้อมูลไลน์มาแสดง ซึ่งจะต้องไปเปลี่ยน Callback URL  ใน Line Developer ทั้งใน Line Login และ Line LIFF จาก /register เป็น /profile-line )
