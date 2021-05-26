import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import UserInput from "./Input";
import { HighlightColors, ThemeColor } from "../Colors";
import { AppContext, ArenaContext } from "../Context";
import { WORD_SIZE } from "../Constants";
import { throttle } from "lodash";

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

// const WPM = () => {
//   const {
//     entered,
//     lastEntered,
//     setLastEntered,
//     charCount,
//     setCharCount,
//     currentWord,
//     lastWord,
//     setLastWord,
//     words,
//     wpm,
//     setWpm,
//     time,
//     setTime,
//     timer,
//     currentSum,
//   } = useContext(AppContext);

//   const getCharCount = () => {
//     if (lastWord === currentWord) {
//       if (entered === lastEntered) {
//         return charCount;
//       } else {
//         return currentSum + entered.length;
//       }
//     }
//     setLastEntered(entered);
//     setLastWord(currentWord);
//     if (currentWord === 0) {
//       return entered.length;
//     }
//     return currentSum + words[currentWord - 1].word.length;
//   };

//   const getWPM = () => {
//     // if timer is not started, ignore
//     if (!timer) {
//       return 0;
//     }

//     // Calculate wpm based on ((words completed)/(time elapsed))
//     const charsCompleted = charCount;
//     const elapsedSeconds = (Date.now() - timer) / 1000;

//     // a word is 5 characters
//     return Math.round((charsCompleted / (WORD_SIZE * elapsedSeconds)) * 60);
//   };

//   const tick = () => {
//     if (time > 100) {
//       setTime(0);
//     } else {
//       setTime(time + 1);
//     }
//   };

//   useEffect(() => {
//     // console.log("ok");
//     throttle(() => {
//       //   console.log("running");
//       setCharCount(getCharCount());
//     }, 1000)();
//     setTimeout(tick, 1200);
//   }, [time]);

//   return <WPMDisplay wpm={wpm} />;
// };

const WPMDisplay = () => {
  const { wpm } = useContext(AppContext);
  return (
    <Paper elevation={3}>
      <Typography variant="h5" style={{ padding: "1rem" }}>
        WPM: {wpm}
      </Typography>
    </Paper>
  );
};

const WPM = () => {
  // measure WPM every 1 second
  const { time, charCount, setWpm } = useContext(AppContext);

  useEffect(() => {
    if (time < 1) {
      return;
    }
    // console.log("oh would you look at the index:", charCount);
    const timeMins = time / 60;
    const wpm = Math.ceil((charCount + 1) / (WORD_SIZE * timeMins));
    setWpm(wpm);
  }, [time]);

  return <WPMDisplay />;
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
  const [typing, setTyping] = useState(false);
  const { entered, time } = useContext(AppContext);
  // useEffect(() => {
  //   console.log("entered", entered);
  //   console.log("time", time);
  // });

  return (
    <ArenaContext.Provider
      value={{
        typing,
        setTyping,
      }}
    >
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
                  <Display />
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
    </ArenaContext.Provider>
  );
};

export default Arena;
