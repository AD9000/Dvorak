export enum Color {
  RED = "#c41414",
  GREEN = "green",
  NONE = "inherit",
  WHITE = "white",
  BLACK = "black",
  LIGHT_GREY = "lightgrey",
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
    bg: Color.GREEN,
    text: Color.WHITE,
  },
  NONE: {
    bg: Color.NONE,
    text: Color.BLACK,
  },
  DONE: {
    bg: Color.LIGHT_GREY,
    text: Color.BLACK,
  },
};
