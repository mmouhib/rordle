import { createContext, useState } from "react";

const WordContext = createContext();

export function ContextProvider({ children }) {
  const [word, setWord] = useState("");
  const [chosenWord, setChosenWord] = useState("mouhib");
  const [row, setRow] = useState(0);
  const [guesses, setGuesses] = useState(["mouth", "", "", "", "", ""]);

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
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
export default WordContext;
