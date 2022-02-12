import StyledRow from "../styled.components/row.styled";
import Cell from "./cell";

const Row = (props) => {
  return (
    <StyledRow>
      {[...Array(5)].map((element, index) => (
        <Cell key={index} value={props.word[index]} pattern={props.pattern[index]} />
      ))}
    </StyledRow>
  );
};

export default Row;
