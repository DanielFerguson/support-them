const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/img/main-1.jpg')",
            },
            colors: {
                blue: colors.sky,
                yellow: colors.amber,
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ["hover", "active"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
    ],
};