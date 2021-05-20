import React, { ChangeEvent, useContext, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { HighlightColors } from "../Colors";
import { AppContext, ArenaContext, TimerContext, Word } from "../Context";
import { WORD_COUNT } from "../Constants";

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

const longestCommonSubstring = (first: string, second: string) => {
  const len = first.length > second.length ? second.length : first.length;
  let word = "";
  for (let i = 0; i < len; i++) {
    const ch = first.charAt(i);
    if (ch === second.charAt(i)) {
      word += ch;
    }
  }

  return word;
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
    stopTimer,
    setTime,
    charCount,
    setCharCount,
  } = useContext(AppContext);

  const { startTimer } = useContext(TimerContext);

  const { typing, setTyping } = useContext(ArenaContext);

  const clearInput = () => {
    if (!ref.current) {
      return;
    }
    ref.current.getElementsByTagName("input")[0].value = "";
  };

  // Checking and updating highlights if needed
  const handleWordUpdate = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const entered = e.target.value;
    setEntered(entered);

    //   console.log("updating word...", started);

    // start timer
    // if (started && currentWord === 0 && entered) {
    //   console.log("starting timer...");
    //   startTimer();
    // }

    if (currentWord === 0 && entered && !typing) {
      startTimer();
      setTyping(true);
    }

    if (currentWord >= WORD_COUNT) {
      return;
    }

    const currentIndex = displayedWords[currentWord];
    const isOk = currentIndex.word.startsWith(entered);
    const isDone = entered === currentIndex.word + " ";

    let updateColor;

    if (isDone) {
      updateColor = HighlightColors.DONE;
    } else if (!entered) {
      updateColor = HighlightColors.NONE;
    } else {
      updateColor = isOk ? HighlightColors.GREAT : HighlightColors.BAD;
    }

    const shouldUpdate = updateColor !== currentIndex.highlight;

    shouldUpdate && updateWord(currentWord, updateColor);
    if (isDone) {
      clearInput();
      nextWord();
    }

    if (isOk) {
      setCharCount(charCount + 1);
    }
  };

  return (
    <TextField
      ref={ref}
      inputRef={(input) => input && input.focus()}
      autoFocus
      fullWidth
      onChange={(e) => handleWordUpdate(e)}
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
