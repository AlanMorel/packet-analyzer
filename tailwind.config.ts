import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
                header: ["Plus Jakarta SansVariable"]
            }
        }
    }
};
