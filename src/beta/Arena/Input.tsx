import React, { ChangeEvent, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { HighlightColors } from "../Colors";
import { AppContext, Word } from "../Context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    // padding: "1 0rem",
  },
  input: {
    // padding: "0 1rem",
    textDecoration: "none",
    fontSize: 50,
  },
});

interface handleWordUpdateProps {
  updateWord: Function;
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
  currentIndex: number;
  displayedWords: Word[];
  nextWord: Function;
  clearInput: Function;
  setEntered: Function;
  startTimer: Function;
}

// Checking and updating highlights if needed
const handleWordUpdate = ({
  updateWord,
  e,
  currentIndex,
  displayedWords,
  nextWord,
  clearInput,
  setEntered,
  startTimer,
}: handleWordUpdateProps) => {
  const entered = e.target.value;
  setEntered(entered);

  // start timer
  if (currentIndex === 0 && entered) {
    startTimer();
  }

  const currentWord = displayedWords[currentIndex];
  const isOk = currentWord.word.startsWith(entered);
  const isDone = entered === currentWord.word + " ";

  let updateColor;

  if (isDone) {
    updateColor = HighlightColors.DONE;
  } else if (!entered) {
    updateColor = HighlightColors.NONE;
  } else {
    updateColor = isOk ? HighlightColors.GREAT : HighlightColors.BAD;
  }

  const shouldUpdate = updateColor !== currentWord.highlight;

  shouldUpdate && updateWord(currentIndex, updateColor);
  if (isDone) {
    clearInput();
    nextWord();
  }
};

const UserInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const clearInput = () => {
    if (!ref.current) {
      return;
    }
    ref.current.getElementsByTagName("input")[0].value = "";
  };

  return (
    <AppContext.Consumer>
      {({
        displayedWords,
        currentWord,
        updateWord,
        nextWord,
        setEntered,
        startTimer,
      }) => {
        return (
          <TextField
            ref={ref}
            fullWidth
            onChange={(e) =>
              handleWordUpdate({
                updateWord,
                e,
                currentIndex: currentWord,
                displayedWords,
                nextWord,
                clearInput,
                setEntered,
                startTimer,
              })
            }
            InputProps={{
              classes: {
                root: classes.root,
                input: classes.input,
              },
            }}
          />
        );
      }}
    </AppContext.Consumer>
  );
};

export { UserInput as default };
