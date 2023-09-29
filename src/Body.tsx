"use client";

import Modal from "@/src/components/modal/Modal";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
    children: ReactNode;
}

export default function Body(props: Props): ReactElement {
    const { children } = props;

    return (
        <body className="m-0 font-sans">
            {children}
            <Toaster position="bottom-center" />
            <Modal />
        </body>
    );
}
