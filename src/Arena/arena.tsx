import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";

// What a legend
const durstenfeldShuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// imagine not using a hardcoded list of words
// Jk, this is temporary
const WordHandler = () => {
  const [words, setWords] = useState<string[]>([]);
  useEffect(() => {
    fetch("/words.txt")
      .then((res) => res.text())
      .then((text) => setWords(text.split("\n")));
  }, []);

  return <p>{durstenfeldShuffle(words).slice(0, 100).join(" ")}</p>;
};

const Arena = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <Paper>
            <WordHandler />
          </Paper>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Arena;
