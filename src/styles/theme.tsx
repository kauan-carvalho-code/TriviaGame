/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ITheme {
  colors: {
    background: string;
    dark600: string;
    dark700: string;
    dark800: string;
    card: string;
    text: string;
    purple200: string;
    correct: string;
    incorrect: string;
  }
}

const darkTheme: ITheme = {
  colors: {
    background: "#2E3440",
    dark600: "#4C566A",
    dark700: "#434C5E",
    dark800: "#3B4252",
    card: "#55617a",
    text: "#E5E9F0",
    purple200: "#B48EAD",
    correct: "#A3BE8C",
    incorrect: "#BF616A"
  },
};

interface AuxProps {
  children: ReactNode
}

export function Theme({ children }: AuxProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  )
}