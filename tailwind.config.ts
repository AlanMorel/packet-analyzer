import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
                header: ["Plus Jakarta SansVariable"]
            }
        }
    }
};
