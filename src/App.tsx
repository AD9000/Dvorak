import React, { useState, useEffect, useRef } from "react";

import Arena from "./Arena/arena";
import { MyContext } from "./Context";
import "./App.css";

// What a legend
const durstenfeldShuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const App = () => {
  const [words, setWords] = useState<string[]>([]);

  // imagine not using a hardcoded list of words
  // Jk, this is temporary
  const getWords = (setWords: Function) => {
    fetch("/words.txt")
      .then((res) => res.text())
      .then((text) => setWords(durstenfeldShuffle(text.split("\n"))));
  };

  useEffect(() => {
    console.log("calling getWords");
    getWords(setWords);
  }, []);

  useEffect(() => {
    console.log(words);
  }, [words]);
  return (
    <MyContext.Provider value={{ words: words, setWords: setWords }}>
      <Arena />
    </MyContext.Provider>
  );
};

export default App;
