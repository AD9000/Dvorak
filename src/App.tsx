import React, { useState, useEffect } from "react";

import Arena from "./Arena/arena";
import { Word, AppContext } from "./Context";
import "./App.css";
import { HighlightColors } from "./Colors";

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

  // imagine not using a hardcoded list of words
  // Jk, this is temporary
  const getWords = (setWords: Function) => {
    fetch("/words.txt")
      .then((res) => res.text())
      .then((text) =>
        setWords(
          durstenfeldShuffle(text.split("\n")).map((word) => ({
            word,
            highlight: HighlightColors.NONE,
          }))
        )
      );
  };

  useEffect(() => {
    getWords(setWords);
  }, []);

  return (
    <AppContext.Provider value={{ words: words, setWords: setWords }}>
      <Arena />
    </AppContext.Provider>
  );
};

export default App;
