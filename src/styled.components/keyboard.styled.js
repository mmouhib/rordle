import styled from "styled-components";

const StyledKey = styled.button`
  width: 20px;
  height: 45px;
  border: none;
  border-right: 5px solid #030303;
  border-bottom: 5px solid #030303;
  border-radius: 7px;
  text-transform: uppercase;
  background-color: #1c2223;
  font-size: 110%;
  cursor: pointer;
  flex: 1 0 9%;
  color: white;

  &:hover {
    background-color: #888888;
  }

  &:active {
    border: 0;
  }
`;

const StyledKeyboard = styled.div`
  min-width: 400px;
  background: #323a3b;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 30%;
  flex-wrap: wrap;
`;

export { StyledKey, StyledKeyboard };
