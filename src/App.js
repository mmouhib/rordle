import { GlobalStyled } from "./styled.components/global.styled";
import { StyledBoard } from "./styled.components/app.styled";
import Topbar from "./components/topbar";
import Board from "./components/board";
import Keyboard from "./components/keyboard";
import { ContextProvider } from "./context/word";

export default function App() {
  return (
    <ContextProvider>
      <StyledBoard>
        <GlobalStyled />
        <Topbar />
        <Board />
        <Keyboard />
      </StyledBoard>
    </ContextProvider>
  );
}
