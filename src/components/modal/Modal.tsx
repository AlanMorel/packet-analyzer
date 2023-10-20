"use client";

import { useModalState } from "@/src/atoms/Modal";
import { ReactElement, useEffect, useRef } from "react";

const Modal = (): ReactElement => {
    const { modal, closeModal } = useModalState();

    const modalRef = useRef<HTMLDivElement>(null);

    const clickOutsideModalHandler = (event: MouseEvent): void => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    };

    useEffect(() => {
        window.addEventListener("click", clickOutsideModalHandler);

        return function cleanup() {
            window.removeEventListener("click", clickOutsideModalHandler);
        };
    });

    const classes = modal.open
        ? "visible scale-100 opacity-100 [transition:_visibility_0s_linear_0s,opacity_0.25s_0s,_transform_0.25s]"
        : "invisible opacity-0 scale-[1.05] [transition:_visibility_0s_linear_0.25s,opacity_0.25s_0s,_transform_0.25s]";

    return (
        <div className={`fixed left-0 top-0 h-full w-full bg-darken35 ${classes}`} ref={modalRef}>
            <div className="absolute left-1/2 top-1/2 w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-4">
                <span
                    className="right-3 top-3 float-right h-6 w-6 cursor-pointer rounded bg-darken05 text-center transition hover:bg-darken15"
                    onClick={closeModal}
                >
                    ×
                </span>
                {modal.content}
            </div>
        </div>
    );
};

export default Modal;
