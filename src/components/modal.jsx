import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import WordContext from "../context/word";

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const modal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function MuiModal() {
  const { modalOpen } = useContext(WordContext);
  const { setModalOpen } = useContext(WordContext);
  const { modalTitle } = useContext(WordContext);
  const { modalContent } = useContext(WordContext);

  return (
    <Modal
      sx={modal}
      open={modalOpen}
      onClose={() => {
        window.location.reload();
        setModalOpen(false);
      }}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {modalContent}
        </Typography>
      </Box>
    </Modal>
  );
}
