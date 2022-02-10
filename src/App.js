import { GlobalStyled } from "./styled.components/global.styled";
import { StyledBoard } from "./styled.components/app.styled";
import Topbar from "./components/topbar";
import Board from "./components/board";
import Keyboard from "./components/keyboard";
import Context, { ContextProvider } from "./context/word";
import { useContext, useEffect } from "react";

export default function App() {
  const word = useContext(Context);

  return (
    <StyledBoard>
      <button
        onClick={() => {
          console.log(word);
        }}
      >
        one
      </button>
      <GlobalStyled />
      <ContextProvider>
        <Topbar />
        <Board />
        <Keyboard />
      </ContextProvider>
    </StyledBoard>
  );
}
