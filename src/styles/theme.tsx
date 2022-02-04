/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  colors: {
    background: "#2E3440",
    dark600: "#4C566A",
    dark700: "#434C5E",
    dark800: "#3B4252",
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