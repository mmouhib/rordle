import StyledCell from "../styled.components/cell.styled";

const Cell = (props) => {
  return <StyledCell>{props.value}</StyledCell>;
};

export default Cell;
