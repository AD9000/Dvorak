import React, { useContext } from "react";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import UserInput from "./Input";
import { HighlightColors, ThemeColor } from "../Colors";
import { AppContext } from "../Context";

interface WordProps {
  highlight: ThemeColor;
  index: number;
  word: string;
  currentWord: boolean;
}

const WordBox = ({ highlight, index, word, currentWord }: WordProps) => {
  return (
    <span
      style={{
        padding: "10px",
        fontSize: 25,
        fontWeight: 500,
        textDecoration: currentWord ? "underline" : "none",
      }}
    >
      <span
        style={{
          // backgroundColor: highlight.bg,
          color: highlight.bg,
        }}
      >
        {word.slice(0, index)}
      </span>
      <span
        style={{
          color: HighlightColors.NONE.bg,
        }}
      >
        {word.slice(index, word.length)}
      </span>
    </span>
  );
};

interface compareProps {
  entered: string;
  word: string;
}

const compare = ({ entered, word }: compareProps) => {
  for (let i = 0; i < word.length; i++) {
    if (i >= entered.length || entered[i] !== word[i]) {
      return i;
    }
  }
  return word.length;
};

const Display = () => {
  const { displayedWords, entered, currentWord } = useContext(AppContext);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
      {displayedWords.map((word, i) => (
        <WordBox
          key={word.word}
          highlight={word.highlight}
          index={i === currentWord ? entered.length : word.word.length}
          word={word.word}
          currentWord={i === currentWord}
        />
      ))}
    </div>
  );
};

const WPM = () => {
  const { wpm } = useContext(AppContext);
  return (
    <Paper elevation={3}>
      <Typography variant="h5" style={{ padding: "1rem" }}>
        WPM: {wpm}
      </Typography>
    </Paper>
  );
};

const DisplayBar = () => {
  return (
    <Grid item container style={{ padding: "2rem", paddingBottom: "0.5rem" }}>
      <Grid item xs={9} />
      <Grid item xs={3} style={{ display: "flex", justifyContent: "center" }}>
        <WPM />
      </Grid>
    </Grid>
  );
};

const startPractice = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setStarted: Function,
  startTimer: Function
) => {
  e.preventDefault();
  setStarted(true);

  setTimeout(() => startTimer(), 1000);
};

const Starter = () => {
  const { setStarted, startTimer } = useContext(AppContext);
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">Start</Typography>
      <Button onClick={(e) => startPractice(e, setStarted, startTimer)}>
        Yeet
      </Button>
    </Box>
  );
};

const Arena = () => {
  const { started } = useContext(AppContext);

  return (
    <Grid container direction="column">
      <DisplayBar />
      <Grid item container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid item container style={{ justifyContent: "center" }}>
            <Grid item xs={10}>
              <Paper
                elevation={5}
                style={{
                  margin: "1.5rem",
                  display: "flex",
                  flexGrow: 1,
                  minHeight: 400,
                }}
              >
                {started ? <Display /> : <Starter />}
              </Paper>
            </Grid>
          </Grid>

          <Grid item container style={{ justifyContent: "center" }}>
            <Grid
              item
              xs={10}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={3}
                style={{
                  margin: "1rem 1.5rem",
                  display: "flex",
                  flexGrow: 1,
                }}
              >
                <UserInput />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Arena;
