export enum Color {
  RED = "#c41414",
  GREEN = "green",
  NONE = "inherit",
  WHITE = "white",
  BLACK = "black",
  LIGHT_GREY = "#c2c2c2",
  DARK_GREY = "darkgray",
  TEST = "#626262",
}

export interface ThemeColor {
  bg: Color;
  text: Color;
}

export type ThemeColors = ThemeColor[];

// the interface
export interface HighlightColor {
  BAD: ThemeColor;
  GREAT: ThemeColor;
  NONE: ThemeColor;
  DONE: ThemeColor;
}

// the star: object
export const HighlightColors: HighlightColor = {
  BAD: {
    bg: Color.RED,
    text: Color.WHITE,
  },
  GREAT: {
    bg: Color.TEST,
    text: Color.WHITE,
  },
  NONE: {
    bg: Color.LIGHT_GREY,
    text: Color.BLACK,
  },
  DONE: {
    bg: Color.GREEN,
    text: Color.BLACK,
  },
};
