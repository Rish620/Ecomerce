const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
    mode: "jit",
    theme: {
        fontFamily: {
            Roboto: ["Roboto", "sans-serif"],
            Poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            screens: {
                "1000px": "1050px",
                "1100px": "1110px",
                "800px": "800px",
                "1300px": "1300px",
                "450px": "450px",
            },
            animation: {
                scrollHorizontal: "scrollHorizontal 20s linear infinite",
            },
            keyframes: {
                scrollHorizontal: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            hideScrollbar: {
                '::-webkit-scrollbar': {
                    display: 'none',
                },
                '-ms-overflow-style': 'none',  /* IE and Edge */
                'scrollbar-width': 'none',  /* Firefox */
            },
        },
    },
    plugins: [flowbite.plugin()],
};
