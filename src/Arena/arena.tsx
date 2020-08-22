import React from "react";
import { Grid, Paper } from "@material-ui/core";
import UserInput from "./Input";
import { ThemeColor } from "../Colors";
import { AppContext } from "../Context";

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

const Display = () => {
  return (
    <AppContext.Consumer>
      {({ displayedWords }) => {
        return (
          <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
            {displayedWords.map((word) => (
              <WordBox key={word.word} highlight={word.highlight}>
                {word.word}
              </WordBox>
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
