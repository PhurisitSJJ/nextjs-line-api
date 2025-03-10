import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

interface ConfirmDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, onClose, onConfirm, title, description }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiPaper-root": {
                    borderRadius: "12px",
                    minWidth: "350px",
                }
            }}
        >
            <DialogTitle sx={{ fontFamily: 'Anuphan', color: "#BF0005" }}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ fontFamily: 'Anuphan', color: "#6B6B6B" }}>
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", gap: 1, pb: 2 }}>
                <Button
                    onClick={onClose}
                    sx={{
                        backgroundColor: "#FFF",
                        color: "#BF0005",
                        border: "1px solid #BF0005",
                        borderRadius: "8px",
                        fontFamily: "Anuphan",
                        "&:hover": {
                            backgroundColor: "#BF0005",
                            color: "#FFF",
                        },
                    }}
                >
                    ยกเลิก
                </Button>
                <Button
                    onClick={onConfirm}
                    sx={{
                        backgroundColor: "#BF0005",
                        color: "#FFF",
                        borderRadius: "8px",
                        fontFamily: "Anuphan",
                        "&:hover": {
                            backgroundColor: "#D53F44",
                        },
                    }}
                    variant="contained"
                >
                    ยืนยัน
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
