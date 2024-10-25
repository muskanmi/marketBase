// styles/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Use 'dark' if you prefer dark mode

    primary: {
      main: "#1D4ED8", // Matches Tailwind 'blue-600'
    },
    secondary: {
      main: "#DC2626", // Matches Tailwind 'red-600'
    },
    background: {
      default: "#F9FAFB", // Matches Tailwind 'gray-50'
      paper: "#FFFFFF", // Matches Tailwind 'white'
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Use Tailwind's 'Inter' font
    h1: {
      fontSize: "2.25rem", // Tailwind 'text-3xl'
      fontWeight: "700", // Tailwind 'font-bold'
    },
    body1: {
      fontSize: "1rem", // Tailwind 'text-base'
      lineHeight: "1.75rem", // Tailwind 'leading-relaxed'
    },
  },
  spacing: 8, // Default Tailwind spacing unit
});

export default theme;
