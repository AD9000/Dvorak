export enum Color {
  RED = "red",
  GREEN = "green",
  NONE = "none",
  WHITE = "white",
  BLACK = "black",
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
};
