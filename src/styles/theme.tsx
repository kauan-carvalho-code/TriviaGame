/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  colors: {
    background: "#2E3440",
    dark600: "#4C566A",
    dark700: "#434C5E",
    dark800: "#3B4252",
    text: "#FFFFFF",
    snow300: "#E5E9F0",
    snow400: "#181e29",
    frost400: "#5E81AC",
    purple200: "#B48EAD"
  },
};

interface AuxProps {
  children: ReactNode
}

export function Theme({ children }: AuxProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  )
}