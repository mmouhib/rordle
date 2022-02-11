import { createContext, useState } from "react";

const WordContext = createContext();

export function ContextProvider({ children }) {
  const [word, setWord] = useState("mouhib ouni");
  return (
    <WordContext.Provider value={{ word }}>{children}</WordContext.Provider>
  );
}
export default WordContext;
