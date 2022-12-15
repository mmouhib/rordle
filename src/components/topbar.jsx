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

const TitleArray = ["r", "o", "r", "d", "l", "e"];

export default function TopBar() {
  return (
    <StyledTopBar>
      <div>
        {TitleArray.map((element, index) => (
          <span key={index} style={index === 0 ? styleOne : styleTwo}>
            {element}
          </span>
        ))}
      </div>
      <StyledHr />
      <Alert />
    </StyledTopBar>
  );
}
