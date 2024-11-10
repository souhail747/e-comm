import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          Mycolor:{
            main:"#666A6F"
          },
          bg:{
            main:"  #F6F6F6"
          },
          modal:{
            main:"#d6ccc2"
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
         
          Mycolor:{
            main:"#666A6F"
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          bg:{
            main:"  #1D2021"
          },
          text: {
            primary: "#fff",
          },
          modal:{
            main:"#edede9"
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};