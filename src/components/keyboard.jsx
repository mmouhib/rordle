import {
  StyledKey,
  StyledKeyboard,
} from "../styled.components/keyboard.styled";

interface KeyProps {
  value: String;
}

function Key(props: KeyProps) {
  return <StyledKey>{props.value}</StyledKey>;
}

export default function Keyboard() {
  let alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  return (
    <StyledKeyboard>
      {alphabet.map((element, index) => {
        return <Key value={element} />;
      })}
      <Key value="DD" />
      <Key value="EE" />
    </StyledKeyboard>
  );
}
