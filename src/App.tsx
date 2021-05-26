import React, { useState, useEffect } from "react";

import Arena from "./components/Arena/arena";
import { Word, AppContext, TimerContext } from "./components/Context";
import "./App.css";
import { HighlightColors, ThemeColor } from "./components/Colors";
import { makeStyles, Theme, createStyles, colors } from "@material-ui/core";
import { WORD_COUNT, WORD_SIZE } from "./components/Constants";
import { track } from "./components/analytics";
import Starter from "./components/Starter";
import UserInput from "./components/Arena/Input";
import { Congrats } from "./components/Congrats";

// What a legend
const durstenfeldShuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const App = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [displayedWords, setDisplayedWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [entered, setEntered] = useState<string>("");
  const [lastEntered, setLastEntered] = useState<string>("");
  const [wpm, setWpm] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const [time, setTime] = useState<number>(-1);
  const [lastWord, setLastWord] = useState<number>(-1);
  const [currentSum, setCurrentSum] = useState<number>(0);

  const [done, setDone] = useState(false);

  // imagine not using a hardcoded list of words
  // Jk, this is temporary
  const getWords = (setWords: Function) => {
    fetch("/words.txt")
      .then((res) => res.text())
      .then((text) =>
        setWords(
          durstenfeldShuffle(text.split(" ")).map((word) => ({
            word,
            highlight: HighlightColors.NONE,
          }))
        )
      );
  };

  // update the word at position
  const updateWord = (index: number, updateColor: ThemeColor) => {
    const updatedDisplay = [...displayedWords];
    updatedDisplay[index] = {
      ...updatedDisplay[index],
      highlight: updateColor,
    };
    setDisplayedWords(updatedDisplay);
  };

  const startTimer = () => {
    if (started) {
      return;
    }
    setStarted(true);
    setTime(0);
  };

  const stopTimer = () => {
    if (!started) {
      return;
    }
    setStarted(false);
  };

  const nextWord = () => {
    if (currentWord >= WORD_COUNT - 1) {
      stopTimer();
      setDone(true);
    }
    setCurrentWord(currentWord + 1);
  };
  useEffect(track);

  useEffect(() => {
    getWords(setWords);
  }, []);

  useEffect(() => {
    setDisplayedWords(words.slice(0, WORD_COUNT));
  }, [words]);

  useEffect(() => {
    if (started) {
      setCurrentSum(currentSum + words[currentWord - 1].word.length);
    }
  }, [currentWord]);

  useEffect(() => {
    if (!started) {
      return;
    }
    const updateTime = setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(updateTime);
  }, [time]);

  return (
    <TimerContext.Provider value={{ startTimer, stopTimer }}>
      <AppContext.Provider
        value={{
          words,
          setWords,
          displayedWords,
          setDisplayedWords,
          updateWord,
          currentWord,
          nextWord,
          entered,
          setEntered,
          lastEntered,
          setLastEntered,
          wpm,
          setWpm,
          stopTimer,
          time,
          setTime,
          charCount,
          setCharCount,
          timer,
          lastWord,
          setLastWord,
          currentSum,
          setCurrentSum,
        }}
      >
        <Wrapper>
          {/* {started ? <Arena /> : <Starter setStarted={setStarted} />} */}
          {done ? <Congrats /> : <Arena />}
        </Wrapper>
      </AppContext.Provider>
    </TimerContext.Provider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      flex: 1,
      backgroundColor: colors.brown[200],
    },
  })
);

const Wrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default App;
