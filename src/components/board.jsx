import StyledBoard from "../styled.components/board.styled";
import WordContext from "../context/word";
import { useContext } from "react";
import Row from "../components/row";

export default function Board() {
  const { guesses } = useContext(WordContext);
  const { wordDiff } = useContext(WordContext);

  return (
    <StyledBoard>
      {[...Array(6)].map((element, index) => (
        <Row key={index} word={guesses[index]} pattern={wordDiff[index]} />
      ))}
    </StyledBoard>
  );
}
