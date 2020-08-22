import React from "react";
import { ThemeColor } from "./Colors";

export interface Word {
  word: string;
  highlight: ThemeColor;
}

interface WordsContext {
  words: Word[];
  displayedWords: Word[];
  setDisplayedWords: Function;
  setWords: Function;
  updateWord: Function;
  currentWord: number;
  nextWord: Function;
  entered: string;
  setEntered: Function;
}

const AppContext = React.createContext<WordsContext>({
  words: [],
  setWords: () => {},
  displayedWords: [],
  setDisplayedWords: () => {},
  updateWord: () => {},
  currentWord: 0,
  nextWord: () => {},
  entered: "",
  setEntered: () => {},
});

export { AppContext };
