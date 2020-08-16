import React, { useState, useEffect, useContext } from "react";
import { Grid, Paper } from "@material-ui/core";
import Input from "./Input";
import { HighlightColors, ThemeColor } from "../Colors";
import { MyContext } from "../Context";

interface WordProps {
  children: React.ReactNode;
  highlight: ThemeColor;
}

const Word = ({ children, highlight }: WordProps) => {
  return (
    <span
      style={{
        padding: "10px",
        backgroundColor: highlight.bg,
        color: highlight.text,
      }}
    >
      {children}
    </span>
  );
};

interface WordHandlerProps {
  words: string[];
}
const WordHandler = ({ words }: WordHandlerProps) => {
  // const [words, setWords] = useState<string[]>([]);
  const [highlighted, setHighlighted] = useState<number>(0);
  const [wordHighlight, setWordHighlight] = useState<ThemeColor>(
    HighlightColors.NONE
  );
  const [inputHighlight, setInputHighlight] = useState<ThemeColor>(
    HighlightColors.NONE
  );

  const clearInputHighLight = () => {
    setInputHighlight(HighlightColors.NONE);
  };

  const compareWithWord = (entered: string) => {
    if (!entered) {
      clearInputHighLight();
      return;
    }

    const currentWord = words[highlighted];
    setWordHighlight(
      currentWord === entered ? HighlightColors.GREAT : HighlightColors.BAD
    );

    console.log(currentWord, entered);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entered = e.target.value;
    // Compare entered stuff with currently highlighted word
    compareWithWord(entered);
  };

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
  highlightColor: ThemeColor;
}
const WordDisplay = ({
  words,
  highlightedIndex,
  highlightColor,
}: WordDisplayProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
      {words.slice(0, 100).map((word, index) => (
        <Word
          key={word}
          highlight={
            highlightedIndex === index ? highlightColor : HighlightColors.NONE
          }
        >
          {word}
        </Word>
      ))}
    </div>
  );
};

// interface ArenaProps {
//   words: string[];
//   setWords: Function;
// }
const Arena = () => {
  //({ words, setWords }: ArenaProps) => {
  const { words } = useContext(MyContext);

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <WordHandler words={words} />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Arena;
