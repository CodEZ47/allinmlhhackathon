// theme.js
import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF", // White background
    },
    primary: {
      main: "#FFB6C1", // Light Pink
      dark: "#FF69B4", // Dark Pink
      light: "#FFC0CB", // Lighter Pink
      contrastText: "#FFFFFF", // White text on pink
    },
    text: {
      primary: "#333333", // Dark Text
      secondary: "#666666", // Lighter Text
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Dark background
    },
    primary: {
      main: "#FFB6C1", // Light Pink
      dark: "#FF69B4", // Dark Pink
      light: "#FFC0CB", // Lighter Pink
      contrastText: "#121212", // Dark text on pink
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#CCCCCC", // Lighter text
    },
  },
});
