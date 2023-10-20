"use client";
import { useEffect, useState } from "react";

const useDarkMode = (): boolean => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent): void => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return (): void => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return isDarkMode;
};

export default useDarkMode;
