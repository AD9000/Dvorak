import React from "react";

interface WordsContext {
  words: string[];
  setWords: Function;
}
const MyContext = React.createContext<WordsContext>({
  words: [],
  setWords: () => {},
});

export { MyContext };
