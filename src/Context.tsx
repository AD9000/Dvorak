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
  wpm: number;
  startTimer: Function;
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
  wpm: 0,
  startTimer: () => {},
});

export { AppContext };
