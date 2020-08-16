import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    backgroundColor: "black",
    fontSize: "100px",
  },
  resize: {
    fontSize: 50,
  },
});

const handleChange = (e: ChangeEvent) => {
  console.log("test");
};

enum TextHighlightColor {
  BAD = "red",
  GREAT = "green",
  NONE = "none",
}

enum BgHighlightColor {
  BAD = "red",
  GREAT = "green",
  NONE = "none",
}

const keys: string[] = Object.keys(BgHighlightColor);
const bgValues = Object.values(BgHighlightColor);
const textValues = Object.values(TextHighlightColor);

const test = bgValues.map((bgValue, index) => ({
  bg: bgValue,
  text: textValues[index],
}));
console.log(test);

// const test2 = Object.assign({}, keys);
const highlightColor = keys.reduce((result, key, index) => {
  result[key] = test[index];
  return result;
}, Object.create({}));
console.log(highlightColor);

enum HighlightColor {
  BAD = "red",
  GREAT = "green",
  NONE = "none",
}

interface InputProps {
  changeHandler(e: React.ChangeEvent): void;
  highlight: HighlightColor;
}

const Input = ({ changeHandler }: InputProps) => {
  const classes = useStyles();
  return (
    <TextField
      onChange={changeHandler}
      InputProps={{
        classes: {
          input: classes.resize,
        },
      }}
    />
  );
};

export { HighlightColor, Input as default };
