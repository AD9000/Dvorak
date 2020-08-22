import React from "react";
import { Grid, Paper } from "@material-ui/core";
import UserInput from "./Input";
import { ThemeColor, HighlightColors } from "../Colors";
import { AppContext, Word } from "../Context";

interface WordProps {
  wordObj: Word;
  index: number;
}

const WordBox = ({ wordObj, index }: WordProps) => {
  const { word, highlight } = wordObj;
  return (
    <AppContext.Consumer>
      {({ entered, currentWord }) => (
        <div
          style={{
            padding: "10px",
            background: currentWord > index ? highlight.bg : "inherit",
          }}
        >
          {word.split("").map((letter, index) => (
            <span
              style={{
                padding: "10px 0",
                backgroundColor:
                  index < entered.length
                    ? highlight.bg
                    : HighlightColors.NONE.bg,
                color:
                  index < entered.length
                    ? highlight.text
                    : HighlightColors.NONE.text,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </AppContext.Consumer>
  );
};

const Display = () => {
  return (
    <AppContext.Consumer>
      {({ displayedWords }) => {
        return (
          <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
            {displayedWords.map((word, index) => (
              <WordBox key={word.word} wordObj={word} index={index} />
            ))}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

const Arena = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <Paper elevation={5} style={{ margin: "3rem" }}>
            <Display />
          </Paper>
          <Paper elevation={3}>
            <UserInput />
          </Paper>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Arena;
