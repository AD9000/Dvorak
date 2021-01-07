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
  lastEntered: string;
  setLastEntered: Function;
  wpm: number;
  setWpm: Function;
  startTimer: Function;
  stopTimer: Function;
  started: boolean;
  setStarted: Function;
  time: number;
  setTime: Function;
  charCount: number;
  setCharCount: Function;
  timer: number;
  lastWord: number;
  setLastWord: Function;
  currentSum: number;
  setCurrentSum: Function;
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
  lastEntered: "",
  setLastEntered: () => {},
  wpm: 0,
  setWpm: () => {},
  startTimer: () => {},
  stopTimer: () => {},
  started: false,
  setStarted: () => {},
  time: -1,
  setTime: () => {},
  charCount: 0,
  setCharCount: () => {},
  timer: 0,
  lastWord: -1,
  setLastWord: () => {},
  currentSum: 0,
  setCurrentSum: () => {},
});

export { AppContext };
