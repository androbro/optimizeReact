// src/theme/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

// Custom color palette that works with both MUI and Tailwind
const themeColors = {
  primary: {
    main: "#640AFF",
    light: "#8B47FF",
    dark: "#904FFF",
  },
  secondary: {
    main: "#FAFF7F",
    light: "#FCFFAD",
    dark: "#F9FF47",
  },
  background: {
    light: "#F8FAFC",
    dark: "#0D0D0D",
  },
  text: {
    light: "#000000", // Text color for light mode
    dark: "#A1A1A1", // Text color for dark mode
  },
  heading: {
    light: "#000000", // Heading color for light mode
    dark: "#FFFFFF", // Heading color for dark mode
  },
  border: {
    light: "#E5E7EB",
    dark: "#2B2B2B",
  },
  // You can extend this with your custom colors
};

const typography = {
  fontFamily: '"Onest", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: "3.75rem", // Tailwind text-4xl
    fontWeight: 700,
    color: themeColors.heading.light,
  },
  h2: {
    fontSize: "1.75rem", // Tailwind text-3xl
    fontWeight: 600,
    color: themeColors.heading.light,
  },
  h3: {
    fontSize: "1.375rem", // Tailwind text-2xl
    fontWeight: 600,
    color: themeColors.heading.light,
  },
  h4: {
    fontSize: "1.25rem", // Tailwind text-xl
    fontWeight: 500,
    color: themeColors.heading.light,
  },
  body1: {
    fontSize: "1rem", // Tailwind text-base
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "0.875rem", // Tailwind text-sm
    lineHeight: 1.5,
  },
};

// Light theme
const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    background: {
      default: themeColors.background.light,
      paper: "#f8fafc", // Tailwind slate-50
    },
    text: {
      primary: themeColors.text.light,
    },
  },
  typography: typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevents all-caps text
          borderRadius: "0.375rem", // Tailwind rounded
        },
      },
    },
    // Add more component customizations here
  },
};

// Dark theme extends light theme with overrides
const darkTheme: ThemeOptions = {
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    mode: "dark",
    background: {
      default: themeColors.background.dark, // Tailwind slate-900
      paper: "#1e293b", // Tailwind slate-800
    },
    text: {
      primary: themeColors.text.dark,
    },
  },
  typography: {
    ...typography,
    h1: {
      ...typography.h1,
      color: themeColors.heading.dark,
    },
    h2: {
      ...typography.h2,
      color: themeColors.heading.dark,
    },
    h3: {
      ...typography.h3,
      color: themeColors.heading.dark,
    },
    h4: {
      ...typography.h4,
      color: themeColors.heading.dark,
    },
  },
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme(mode === "light" ? lightTheme : darkTheme);

// Export the base colors for use with Tailwind
export const colors = themeColors;