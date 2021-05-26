import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Confetti from "react-dom-confetti";
import { AppContext } from "./Context";

const Congrats = () => {
  const { wpm } = useContext(AppContext);
  const [confetti, setConfetti] = useState(true);
  const width = window.innerWidth.toString();
  const height = window.innerHeight.toString();

  useEffect(() => {
    setTimeout(() => setConfetti(true), 1000);
  }, []);

  return (
    <>
      <Confetti active={confetti} config={{ width, height }} />
      <Grid container direction="column">
        <Grid item xs={2} />
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
                    flexDirection: "column",
                    padding: 20,
                    minHeight: 400,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h2"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Congratulations!
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                      Your typing speed was {wpm} WPM
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={1} />
        </Grid>
      </Grid>
    </>
  );
};

export { Congrats };
