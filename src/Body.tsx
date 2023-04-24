"use client";

import Modal from "@/src/components/modal/Modal";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
    children: ReactNode;
}

export default function Body(props: Props): JSX.Element {
    const { children } = props;

    return (
        <body className="m-0 font-sans">
            {children}
            <Toaster position="bottom-center" />
            <Modal />
        </body>
    );
}
