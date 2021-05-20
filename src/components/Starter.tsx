import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";

import { strings } from "./Constants";

const startPractice = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setStarted: Function
) => {
  e.preventDefault();
  setStarted(true);
};

export interface StarterProps {
  setStarted: Function;
}

const Starter = ({ setStarted }: StarterProps) => {
  return (
    <Grid
      item
      container
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        style={{
          minHeight: 400,
          minWidth: 400,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button onClick={(e) => startPractice(e, setStarted)}>
          <Typography variant="h1">{strings.starter.start}</Typography>
        </Button>
      </Paper>
    </Grid>
  );
};

export default Starter;
