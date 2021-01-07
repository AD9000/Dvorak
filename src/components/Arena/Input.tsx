import React, { ChangeEvent, useContext, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { HighlightColors } from "../Colors";
import { AppContext, Word } from "../Context";
import { WORD_COUNT } from "../constants";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  input: {
    textDecoration: "none",
    fontSize: 50,
    textAlign: "center",
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
  stopTimer: Function;
  started: boolean;
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
  stopTimer,
  started,
}: handleWordUpdateProps) => {
  const entered = e.target.value;
  setEntered(entered);

  //   console.log("updating word...", started);

  // start timer
  // if (started && currentIndex === 0 && entered) {
  //   console.log("starting timer...");
  //   startTimer();
  // }

  if (currentIndex >= WORD_COUNT) {
    return;
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

  if (currentIndex >= 99) {
    stopTimer();
  }
};

const UserInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const {
    displayedWords,
    currentWord,
    updateWord,
    nextWord,
    setEntered,
    startTimer,
    stopTimer,
    started,
  } = useContext(AppContext);

  const clearInput = () => {
    if (!ref.current) {
      return;
    }
    ref.current.getElementsByTagName("input")[0].value = "";
  };

  return (
    <TextField
      ref={ref}
      inputRef={(input) => input && input.focus()}
      autoFocus
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
          stopTimer,
          started,
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
};

export { UserInput as default };
