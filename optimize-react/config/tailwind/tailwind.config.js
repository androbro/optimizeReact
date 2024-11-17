import { colors } from '../../theme/theme';  // Use relative path from project root

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    important: '#root',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: colors.primary.light,
                    main: colors.primary.main,
                    dark: colors.primary.dark,
                },
                secondary: {
                    light: colors.secondary.light,
                    main: colors.secondary.main,
                    dark: colors.secondary.dark,
                },
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}