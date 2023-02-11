/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: "346px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                backgroundPan: {
                    "0%": {
                        backgroundPosition: "0% center",
                    },
                    "100%": {
                        backgroundPosition: "-200% center",
                    },
                },
            },
            animation: {
                magicText: "backgroundPan 2s linear infinite",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
