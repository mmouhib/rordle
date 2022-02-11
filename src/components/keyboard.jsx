import {
  StyledKey,
  StyledKeyboard,
} from "../styled.components/keyboard.styled";
import WordContext from "../context/word";
import { useContext, useEffect } from "react";

export default function Keyboard() {
  const { word } = useContext(WordContext);
  const { setWord } = useContext(WordContext);
  const { guesses } = useContext(WordContext);
  const { setGuesses } = useContext(WordContext);
  const { row } = useContext(WordContext);

  useEffect(() => {
    if (word.length > 5) {
      setWord(word.substr(0, 5));
    }

    setGuesses(
      guesses.map((element, index) => {
        if (index === row) {
          return word;
        }
        return element;
      })
    );
  }, [setWord, word]);

  let alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  return (
    <StyledKeyboard>
      {alphabet.map((element, index) => {
        return (
          <StyledKey
            key={index}
            onClick={() => {
              setWord(word + element);
            }}
          >
            {element}
          </StyledKey>
        );
      })}
      <StyledKey>♥</StyledKey>
      <StyledKey
        onClick={() => {
          setWord(word.substring(0, word.length - 1));
        }}
      >
        ─
      </StyledKey>
    </StyledKeyboard>
  );
}
