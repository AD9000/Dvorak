import React, { useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
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

const Arena = () => {
  return (
    <Grid container direction="column">
      <DisplayBar />
      <Grid item container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Paper elevation={5} style={{ margin: "1.5rem" }}>
              <Display />
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={3}
              style={{
                margin: "1rem 2rem",
                display: "flex",
                flexGrow: 1,
              }}
            >
              <UserInput />
            </Paper>
          </Grid>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Arena;
