"use client";

import Modal from "@/src/components/modal/Modal";
import useDarkMode from "@/src/mixins/DarkMode";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
    children: ReactNode;
}

export default function Body(props: Props): ReactElement {
    const { children } = props;
    const isDarkMode = useDarkMode();

    return (
        <body
            className={`m-0 min-h-screen bg-light-background bg-left-bottom bg-repeat-x font-sans text-black dark:bg-dark-background`}
            data-theme={`${isDarkMode ? "dark" : "light"}`}
        >
            {children}
            <Toaster position="bottom-center" />
            <Modal />
        </body>
    );
}
