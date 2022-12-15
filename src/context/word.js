import { createContext, useState } from "react";

const WordContext = createContext();

export function ContextProvider({ children }) {
  const [word, setWord] = useState("");
  const [chosenWord, setChosenWord] = useState("react");
  const [row, setRow] = useState(0);
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]);
  const [result, setResult] = useState(2); //0 = loss, 1 = win, 2 = game not finished
  const [wordDiff, setWordDiff] = useState(Array(6).fill([3, 3, 3, 3, 3]));
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertValue, setAlertValue] = useState("error");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

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
        wordDiff,
        setWordDiff,
        alertOpen,
        setAlertOpen,
        alertValue,
        setAlertValue,
        modalOpen,
        setModalOpen,
        modalTitle,
        setModalTitle,
        modalContent,
        setModalContent,
      }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordContext;
