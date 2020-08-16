import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeColor } from "../Colors";

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
          root: classes.root,
          input: classes.textBox,
        },
      }}
    />
  );
};

export { Input as default };
