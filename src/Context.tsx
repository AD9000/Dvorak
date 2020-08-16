import React from "react";
import { ThemeColor } from "./Colors";

export interface Word {
  word: string;
  highlight: ThemeColor;
}

interface WordsContext {
  words: Word[];
  setWords: Function;
}
const AppContext = React.createContext<WordsContext>({
  words: [],
  setWords: () => {},
});

export { AppContext };
