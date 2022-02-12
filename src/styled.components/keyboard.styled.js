import styled from "styled-components";

const StyledKey = styled.button`
  width: 20px;
  height: 45px;
  border: 1px solid #8d8d8d;
  border-radius: 7px;
  text-transform: uppercase;
  background-color: lightgrey;
  font-size: 100%;
  cursor: pointer;
  flex: 1 0 9%;

  &:hover {
    background-color: #a8a8a8;
  }
`;

const StyledKeyboard = styled.div`
  margin-top: 8.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 40%;
  flex-wrap: wrap;
`;

export { StyledKey, StyledKeyboard };
