import { StyledKey, StyledKeyboard } from "../styled.components/keyboard.styled";
import WordContext from "../context/word";
import { useContext, useEffect } from "react";

export default function Keyboard() {
  const { word } = useContext(WordContext);
  const { setWord } = useContext(WordContext);
  const { guesses } = useContext(WordContext);
  const { setGuesses } = useContext(WordContext);
  const { row } = useContext(WordContext);
  const { setRow } = useContext(WordContext);
  const { result } = useContext(WordContext);
  const { setResult } = useContext(WordContext);
  const { chosenWord } = useContext(WordContext);

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

  let alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  return (
    <StyledKeyboard>
      {alphabet.map((element, index) => {
        return (
          <StyledKey
            key={index}
            onClick={() => {
              setWord(word + element);
            }}>
            {element}
          </StyledKey>
        );
      })}
      <StyledKey
        onClick={() => {
          if (word.length === 5) {
            if (word.toUpperCase() === chosenWord.toUpperCase()) {
              setResult(1);
              alert("win");
            } else {
              if (row === 5) {
                setResult(0);
                alert("loss");
              }
            }
            setRow(row + 1);
            setWord("");
          }
        }}>
        ♥
      </StyledKey>
      <StyledKey
        onClick={() => {
          setWord(word.substring(0, word.length - 1));
        }}>
        ─
      </StyledKey>
    </StyledKeyboard>
  );
}
