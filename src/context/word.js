import { createContext, useState } from "react";

const WordContext = createContext();

export function ContextProvider({ children }) {
  const [word, setWord] = useState("");
  const [chosenWord, setChosenWord] = useState("react");
  const [row, setRow] = useState(0);
  const [guesses, setGuesses] = useState(["mouth", "", "", "", "", ""]);
  const [result, setResult] = useState(2); //0 = loss, 1 = win, 2 = game not finished

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        chosenWord,
        setChosenWord,
        row,
        setRow,
        guesses,
        setGuesses,
        result,
        setResult,
      }}>
      {children}
    </WordContext.Provider>
  );
}
export default WordContext;
