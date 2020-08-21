import React, { ChangeEvent, useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeColor, HighlightColors } from "../Colors";
import { AppContext, Word } from "../Context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  textBox: {
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
}

// Checking and updating highlights if needed
const handleWordUpdate = ({
  updateWord,
  e,
  currentIndex,
  displayedWords,
  nextWord,
  clearInput,
}: handleWordUpdateProps) => {
  const entered = e.target.value;
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
      {({ displayedWords, currentWord, updateWord, nextWord }) => {
        return (
          <TextField
            ref={ref}
            onChange={(e) =>
              handleWordUpdate({
                updateWord,
                e,
                currentIndex: currentWord,
                displayedWords,
                nextWord,
                clearInput,
              })
            }
            InputProps={{
              classes: {
                root: classes.root,
                input: classes.textBox,
              },
            }}
          />
        );
      }}
    </AppContext.Consumer>
  );
};

export { UserInput as default };
