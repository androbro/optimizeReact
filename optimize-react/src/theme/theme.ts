// src/theme/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Custom color palette that works with both MUI and Tailwind
const themeColors = {
    primary: {
        main: '#0ea5e9', // Tailwind blue-500
        light: '#38bdf8', // Tailwind blue-400
        dark: '#0369a1', // Tailwind blue-700
    },
    secondary: {
        main: '#a855f7', // Tailwind purple-500
        light: '#c084fc', // Tailwind purple-400
        dark: '#7e22ce', // Tailwind purple-700
    },
    // You can extend this with your custom colors
};

// Light theme
const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: themeColors.primary,
        secondary: themeColors.secondary,
        background: {
            default: '#ffffff',
            paper: '#f8fafc', // Tailwind slate-50
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.25rem', // Tailwind text-4xl
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.875rem', // Tailwind text-3xl
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.5rem', // Tailwind text-2xl
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem', // Tailwind text-base
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem', // Tailwind text-sm
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Prevents all-caps text
                    borderRadius: '0.375rem', // Tailwind rounded
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
        mode: 'dark',
        background: {
            default: '#0f172a', // Tailwind slate-900
            paper: '#1e293b', // Tailwind slate-800
        },
    },
};

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme(mode === 'light' ? lightTheme : darkTheme);

// Export the base colors for use with Tailwind
export const colors = themeColors;