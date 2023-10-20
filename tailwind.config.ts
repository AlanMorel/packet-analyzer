import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";

const config: Config = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    plugins: [
        createThemes({
            light: {
                white: colors.white,
                black: colors.black,
                darken05: "rgba(0, 0, 0, 0.05)",
                darken15: "rgba(0, 0, 0, 0.15)",
                darken35: "rgba(0, 0, 0, 0.35)",
                lighten95: "rgba(255, 255, 255, 0.95)"
            },
            dark: {
                white: colors.black,
                black: colors.white,
                darken05: "rgba(255, 255, 255, 0.05)",
                darken15: "rgba(255, 255, 255, 0.15)",
                darken35: "rgba(255, 255, 255, 0.35)",
                lighten95: "rgba(0, 0, 0, 0.35)"
            }
        })
    ],
    theme: {
        extend: {
            fontFamily: {
                text: ["var(--font-inter)", "Open Sans", ...defaultTheme.fontFamily.sans],
                header: ["moranga"]
            },
            animation: {
                enter: "fade-in 200ms ease-out, scale-up 200ms ease-out",
                leave: "fade-out 150ms ease-in forwards, scale-down 150ms ease-in forwards"
            },
            backgroundImage: {
                "light-background":
                    "url('~public/images/light-background.png'), linear-gradient(180deg, rgb(225 224 255) 0%, rgb(214 236 248) 20%, rgb(181 226 252) 100%)",
                "dark-background":
                    "url('~public/images/dark-background.png'), linear-gradient(180deg, rgb(17 15 45) 0%, rgb(34 32 79) 20%, rgb(46 44 82) 100%)"
            },
            keyframes: {
                "fade-out": {
                    "0%": {
                        opacity: "1"
                    },
                    "100%": {
                        opacity: "0"
                    }
                },
                "scale-down": {
                    "0%": {
                        transform: "scale(1)"
                    },
                    "100%": {
                        transform: "scale(0.9)"
                    }
                },
                "scale-up": {
                    "0%": {
                        transform: "scale(0.9)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                },
                "fade-in": {
                    "0%": {
                        opacity: "0"
                    },
                    "100%": {
                        opacity: "1"
                    }
                },
                "slide-in": {
                    "0%": {
                        transform: "translateY(1rem)"
                    },
                    "100%": {
                        transform: "translateY(0)"
                    }
                }
            }
        }
    }
};

export default config;
