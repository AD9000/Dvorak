import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import Input, { HighlightColor } from "./Input";

// What a legend
const durstenfeldShuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface WordProps {
  children: React.ReactNode;
  highlight: HighlightColor;
}

const Word = ({ children, highlight }: WordProps) => {
  return (
    <span style={{ padding: "10px", backgroundColor: highlight }}>
      {children}
    </span>
  );
};

const WordHandler = () => {
  const [words, setWords] = useState<string[]>([]);
  const [highlighted, setHighlighted] = useState<number>(0);
  const [wordHighlight, setWordHighlight] = useState<HighlightColor>(
    HighlightColor.NONE
  );
  const [inputHighlight, setInputHighlight] = useState<HighlightColor>(
    HighlightColor.NONE
  );

  const clearInputHighLight = () => {
    setInputHighlight(HighlightColor.NONE);
  };

  const compareWithWord = (entered: string) => {
    if (!entered) {
      clearInputHighLight();
      return;
    }
    console.log(entered);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entered = e.target.value;
    // Compare entered stuff with currently highlighted word
    compareWithWord(entered);
  };

  useEffect(() => {
    getWords(setWords);
    setWordHighlight(HighlightColor.GREAT);
  }, []);

  return (
    <>
      <Paper style={{ margin: "3rem" }}>
        <WordDisplay
          words={words}
          highlightedIndex={highlighted}
          highlightColor={wordHighlight}
        />
      </Paper>
      <Paper>
        <Input changeHandler={handleChange} highlight={inputHighlight} />
      </Paper>
    </>
  );
};

interface WordDisplayProps {
  words: string[];
  highlightedIndex: number;
  highlightColor: HighlightColor;
}
const WordDisplay = ({
  words,
  highlightedIndex,
  highlightColor,
}: WordDisplayProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
      {durstenfeldShuffle(words)
        .slice(0, 100)
        .map((word, index) => (
          <Word
            key={word}
            highlight={
              highlightedIndex === index ? highlightColor : HighlightColor.NONE
            }
          >
            {word}
          </Word>
        ))}
    </div>
  );
};

// imagine not using a hardcoded list of words
// Jk, this is temporary
const getWords = (setWords: Function) => {
  fetch("/words.txt")
    .then((res) => res.text())
    .then((text) => setWords(text.split("\n")));
};

const Arena = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <WordHandler />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Arena;
