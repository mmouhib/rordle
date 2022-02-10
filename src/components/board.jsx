import {
  StyledBoard,
  StyledRow,
  StyledBox,
} from "../styled.components/board.styled";

const Block = () => {
  return <StyledBox />;
};

const Row = () => {
  return (
    <StyledRow>
      {[...Array(6)].map((element, index) => (
        <Block />
      ))}
    </StyledRow>
  );
};

export default function Board() {
  return (
    <StyledBoard>
      {[...Array(6)].map((element, index) => (
        <Row />
      ))}
    </StyledBoard>
  );
}
