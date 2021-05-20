import React, { createContext } from "react";
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
  stopTimer: Function;
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
  stopTimer: () => {},
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

interface TypingContext {
  typing: boolean;
  setTyping: Function;
}

const ArenaContext = createContext<TypingContext>({
  typing: false,
  setTyping: () => {},
});

interface TimeContext {
  startTimer: Function;
  stopTimer: Function;
}

const TimerContext = createContext<TimeContext>({
  startTimer: () => {},
  stopTimer: () => {},
});

export { AppContext, ArenaContext, TimerContext };
