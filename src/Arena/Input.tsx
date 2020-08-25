import React, { ChangeEvent, useRef, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { HighlightColors } from "../Colors";
import { AppContext, Word } from "../Context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  input: {
    textDecoration: "none",
    fontSize: 50,
  },
});

interface handleWordUpdateProps {
  updateWord: Function;
  entered: string;
  currentIndex: number;
  displayedWords: Word[];
  nextWord: Function;
  clearInput: Function;
  // setEntered: Function;
}

// Checking and updating highlights if needed
const handleWordUpdate = ({
  updateWord,
  entered,
  currentIndex,
  displayedWords,
  nextWord,
  clearInput,
}: handleWordUpdateProps) => {
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
  const [rawEntered, setRawEntered] = useState<string>("");
  const classes = useStyles();

  const {
    updateWord,
    entered,
    setEntered,
    currentWord,
    displayedWords,
    nextWord,
  } = useContext(AppContext);

  const clearInput = () => {
    if (!ref.current) {
      return;
    }
    ref.current.getElementsByTagName("input")[0].value = "";
  };

  // const handleRawUpdate = (value: string) => {
  //   // Doesn't exist. Clear
  //   if (!value) {
  //     setRawEntered("");
  //     return;
  //   }

  //   // pressed a backspace
  //   if (value.length < rawEntered.length) {
  //     setRawEntered(rawEntered.slice(0, value.length));
  //     return;
  //   }

  //   // Ok, get the last character
  //   let newValue = rawEntered + value.charAt(value.length - 1);
  //   setRawEntered(newValue);
  // };

  const handleRawUpdate = (value: string) => {
    console.log(value);
    setRawEntered(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleRawUpdate(e.target.value);
    // handleWordUpdate({updateWord, entered: rawEntered});
  };

  return (
    <TextField
      value={rawEntered}
      ref={ref}
      fullWidth
      onChange={handleChange}
      // onChange={(e) =>
      //   handleWordUpdate({
      //     updateWord,
      //     e,
      //     currentIndex: currentWord,
      //     displayedWords,
      //     nextWord,
      //     clearInput,
      //     setEntered,
      //   })
      // }
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
