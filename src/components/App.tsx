import React, { useState, useEffect } from "react";

import Arena from "./Arena/arena";
import { Word, AppContext } from "./Context";
import "./App.css";
import { HighlightColors, ThemeColor } from "./Colors";
import { makeStyles, Theme, createStyles, colors } from "@material-ui/core";
import { WORD_COUNT } from "./constants";

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
  const [wpm, setWpm] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const [time, setTime] = useState<number>(-1);

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

  const getWPM = () => {
    // if timer is not started, ignore
    if (!timer) {
      return 0;
    }

    // Calculate wpm based on ((words completed)/(time elapsed))
    const charsCompleted = charCount;
    const elapsedSeconds = Math.max((Date.now() - timer) / 1000, 1);

    // a word is 5 characters
    return Math.round((charsCompleted / (5 * elapsedSeconds)) * 60);
  };

  const getCharCount = () => {
    if (currentWord === 0) {
      return entered.length;
    }
    return charCount + words[currentWord - 1].word.length;
  };

  const startTimer = () => {
    // no need for an active timer
    if (started) {
      return;
    } else {
      // timer is set to the current time
      setTimeout(() => {
        setTimer(Date.now());
        setStarted(true);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (!started) {
      return;
    } else {
      setStarted(false);
    }
  };

  const nextWord = () => {
    setCurrentWord(currentWord + 1);
  };

  const tick = () => {
    if (time > 100) {
      setTime(0);
    } else {
      setTime(time + 1);
    }
  };

  useEffect(() => {
    setCharCount(getCharCount());
    setTimeout(tick, 2000);
  }, [time]);

  useEffect(() => {
    if (started) {
      setWpm(getWPM());
      if (time === -1) {
        tick();
      }
    }
  }, [charCount, started]);

  useEffect(() => {
    getWords(setWords);
  }, []);

  useEffect(() => {
    setDisplayedWords(words.slice(0, WORD_COUNT));
  }, [words]);

  return (
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
        wpm,
        startTimer,
        stopTimer,
        started,
        setStarted,
      }}
    >
      <Wrapper>
        <Arena />
      </Wrapper>
    </AppContext.Provider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
      backgroundColor: colors.brown[200],
    },
  })
);

const Wrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default App;
