import { StyledTopBar, StyledHr } from "../styled.components/topbar.styled";
import Alert from "./alert";

const styleOne = {
  background: "#b59f3b",
  width: "50px",
  height: "52px",
  display: "inline-block",
  marginLeft: "10px",
};

const styleTwo = {
  background: "#538d4e",
  width: "50px",
  height: "52px",
  display: "inline-block",
  marginLeft: "10px",
  userSelect: "none",
};

export default function TopBar() {
  return (
    <StyledTopBar>
      <div>
        <span style={styleOne}>R</span>
        <span style={styleTwo}>O</span>
        <span style={styleTwo}>R</span>
        <span style={styleTwo}>D</span>
        <span style={styleTwo}>L</span>
        <span style={styleTwo}>E</span>
      </div>
      <StyledHr />
      <Alert />
    </StyledTopBar>
  );
}
