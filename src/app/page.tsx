"use client";

import { ColorModeContext } from "@/context/styles/theme-context";
import { useTheme } from "@mui/material/index";
import { useContext } from "react";

export default function HomePage() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <main style={{ color: theme.palette.primary.main }}>
      <p onClick={() => toggleColorMode()}>theme toggle</p>
    </main>
  );
}
