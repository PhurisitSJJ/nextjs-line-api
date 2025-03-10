import { TextField } from "@mui/material";

export default function Address() {

    <TextField
        placeholder="จังหวัด, เขต/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์"
        type="text"
        sx={{
            mb: 2,
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
    />
}