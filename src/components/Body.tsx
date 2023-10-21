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
        <body className="m-0 font-sans text-black" data-theme={`${isDarkMode ? "dark" : "light"}`}>
            <div className="min-h-screen bg-light-background bg-left-bottom bg-repeat-x dark:bg-dark-background">
                {children}
            </div>
            <Toaster position="bottom-center" />
            <Modal />
        </body>
    );
}
