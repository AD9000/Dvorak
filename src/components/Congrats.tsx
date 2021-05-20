import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Congrats = () => {
  return (
    <Grid container direction="column">
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
                yeet
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export { Congrats };
