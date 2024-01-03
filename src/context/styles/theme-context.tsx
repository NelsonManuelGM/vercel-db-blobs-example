"use client";

import { PaletteMode, Theme } from "@mui/material";
import { ThemeProvider, createTheme, css } from "@mui/material/styles";
import { Global } from "@emotion/react";
import { createContext, useContext, useMemo, useState } from "react";
import { Inter } from "next/font/google";

import { ColorPalette, DarkColorPalette, GrayScale } from "./palette";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700", "300", "400", "100"],
});

export const globalStyle = ({ palette }: Theme) => css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    color: ${palette.text.primary};
    background-color: ${palette.background.default};
    ${inter.style};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

interface Props {
  children: React.ReactNode;
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeContext({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: ColorPalette.primary,
                },
                secondary: {
                  main: ColorPalette.secondary,
                },
                error: {
                  main: ColorPalette.error,
                },
                warning: {
                  main: ColorPalette.warning,
                },
                success: {
                  main: ColorPalette.success,
                },
                info: {
                  main: ColorPalette.info,
                },
                grey: {
                  ...GrayScale,
                },
                background: {
                  default: GrayScale["200"],
                },
                text: { primary: GrayScale[900] },
              }
            : {
                primary: {
                  main: DarkColorPalette.primary,
                },
                secondary: {
                  main: DarkColorPalette.secondary,
                },
                error: {
                  main: DarkColorPalette.error,
                },
                warning: {
                  main: DarkColorPalette.warning,
                },
                success: {
                  main: DarkColorPalette.success,
                },
                info: {
                  main: DarkColorPalette.info,
                },
                grey: {
                  ...GrayScale,
                },
                background: {
                  default: GrayScale["900"],
                },
                text: { primary: GrayScale[100] },
              }),
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Global styles={globalStyle(theme)} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
