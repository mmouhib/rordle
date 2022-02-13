import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import WordContext from "../context/word";
import { useContext } from "react";

export default function TransitionAlerts() {
  const { alertOpen } = useContext(WordContext);
  const { setAlertOpen } = useContext(WordContext);
  const { alertValue } = useContext(WordContext);

  return (
    <Box sx={{ width: "50%" }}>
      <Collapse in={alertOpen}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          <strong>BEEP! </strong> {alertValue}
        </Alert>
      </Collapse>
    </Box>
  );
}
