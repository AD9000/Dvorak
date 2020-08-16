import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeColor } from "../Colors";

const useStyles = makeStyles({
  textField: {
    backgroundColor: "black",
    fontSize: "100px",
  },
  resize: {
    fontSize: 50,
  },
});

interface InputProps {
  changeHandler(e: ChangeEvent): void;
  highlight: ThemeColor;
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

export { Input as default };
