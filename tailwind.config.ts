import { type Config } from "tailwindcss";

export default <Partial<Config>>{
    content: [
        "./app/**/*.{vue,ts,js}",
        "./components/**/*.{vue,ts,js}",
        "./layouts/**/*.{vue,ts,js}",
        "./pages/**/*.{vue,ts,js}",
        "./plugins/**/*.{ts,js}",
        "./.nuxt/**/*.{vue,ts,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: {
                    pink: "#ff0078",
                },
                pink: {
                    light: "#fa9bbb",
                    dark: "#d82b6a",
                },
                gray: {
                    light: "#f7f7f7",
                    medium: "#999",
                    dark: "#5c5c5c",
                },
            },
            borderWidth: { 6: "6px" },
            keyframes: {
                wave: {
                    "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
                    "50%": { transform: "translateY(-8px)", opacity: "1" },
                },
            },
            animation: {
                wave: "wave 0.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
