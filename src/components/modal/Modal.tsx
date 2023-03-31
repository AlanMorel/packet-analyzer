import { useModalState } from "@/src/atoms/Modal";
import { useEffect, useRef } from "react";

const Modal = (): JSX.Element => {
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

    return (
        <div
            className={`modal fixed left-0 top-0 h-full w-full scale-[1.1] bg-[--darken-contrast-35] opacity-0 ${
                modal.open ? "modal--show visible scale-[1] opacity-100" : "invisible"
            }`}
            ref={modalRef}
        >
            <div className="absolute left-1/2 top-1/2 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform rounded bg-[--contrast-white] p-4">
                <span
                    className="close-button right-3 top-3 float-right h-6 w-6 cursor-pointer rounded bg-[--darken-contrast-05] text-center transition hover:bg-[--darken-contrast-15]"
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
