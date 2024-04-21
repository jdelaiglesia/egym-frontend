/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],

    // daisyUI config (optional - here are the default values)
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#f59e0b",

                    secondary: "#d946ef",

                    accent: "#3b82f6",

                    neutral: "#1a1a1a",

                    "base-100": "#141414",

                    info: "#2b8ad2",

                    success: "#04b10a",

                    warning: "#ecb90d",

                    error: "#e23e32",
                },
            },
            "dark",
            "light",
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "black", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
