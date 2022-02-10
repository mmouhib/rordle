import { createContext, useState, useContext } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [word, setWord] = useState("mouhib");
  return <Context.Provider value={word}>{children}</Context.Provider>;
}
export default Context;
