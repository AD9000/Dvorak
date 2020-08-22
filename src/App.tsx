import React, { useState, useEffect } from "react";

import Arena from "./Arena/arena";
import { Word, AppContext } from "./Context";
import "./App.css";
import { HighlightColors, ThemeColor } from "./Colors";

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

  const nextWord = () => {
    setCurrentWord(currentWord + 1);
  };

  useEffect(() => {
    getWords(setWords);
  }, []);

  useEffect(() => {
    setDisplayedWords(words.slice(0, 100));
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
      }}
    >
      <Arena />
    </AppContext.Provider>
  );
};

export default App;
