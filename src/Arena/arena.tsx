import React, { useState, useEffect, useContext } from "react";
import { Grid, Paper } from "@material-ui/core";
import Input from "./Input";
import { HighlightColors, ThemeColor } from "../Colors";
import { AppContext, Word } from "../Context";

interface WordProps {
  children: React.ReactNode;
  highlight: ThemeColor;
}

const WordBox = ({ children, highlight }: WordProps) => {
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

const WordHandler = () => {
  const { words } = useContext(AppContext);
  const [highlighted, setHighlighted] = useState<number>(0);
  const [lastHighlighted, setLastHighlighted] = useState<number | null>(null);
  // const [wordHighlight, setWordHighlight] = useState<ThemeColor>(
  //   HighlightColors.NONE
  // );
  const [inputHighlight, setInputHighlight] = useState<ThemeColor>(
    HighlightColors.NONE
  );

  interface setWordHighlightProps {
    index: number;
    color: ThemeColor;
  }
  const clearInputHighLight = () => {
    setInputHighlight(HighlightColors.NONE);
  };

  const setWordHighlight = ({ index, color }: setWordHighlightProps) => {
    words[index].highlight = color;
  };

  const clearWordHighlight = () => {
    words[highlighted].highlight = HighlightColors.NONE;
  };

  const finishWord = () => {
    setLastHighlighted(highlighted);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawEntered = e.target.value;
    const entered = rawEntered.trim();
    // Compare entered stuff with currently highlighted word
    if (!entered) {
      clearInputHighLight();
      return;
    }

    const currentWord = words[highlighted].word.trim();
    console.log("'" + currentWord + "'", entered);
    const isWordCorrect = currentWord === entered;
    setWordHighlight({
      index: highlighted,
      color: isWordCorrect ? HighlightColors.GREAT : HighlightColors.BAD,
    });

    if (isWordCorrect && rawEntered[rawEntered.length - 1] === " ") {
      finishWord();
      setWordHighlight({ index: highlighted + 1, color: HighlightColors.DONE });
      setHighlighted(highlighted + 1);
      // Remove stuff from input
      e.target.value = "";
    }
  };

  return (
    <>
      <Paper style={{ margin: "3rem" }}>
        <WordDisplay
          words={words.slice(0, 100)}
          highlightedIndex={highlighted}
        />
      </Paper>
      <Paper>
        <Input changeHandler={handleChange} highlight={inputHighlight} />
      </Paper>
    </>
  );
};

interface WordDisplayProps {
  words: Word[];
  highlightedIndex: number;
}
const WordDisplay = ({ words, highlightedIndex }: WordDisplayProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
      {words.map((word) => (
        <WordBox key={word.word} highlight={word.highlight}>
          {word.word}
        </WordBox>
      ))}
    </div>
  );
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
