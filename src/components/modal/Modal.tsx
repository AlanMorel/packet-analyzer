import { useModalState } from "@/src/atoms/Modal";
import { useEffect, useRef } from "react";

import "@/src/components/modal/Modal.scss";

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
        <div className={`modal ${modal.open ? "modal--show" : ""}`} ref={modalRef}>
            <div className="modal__content">
                <span className="close-button" onClick={closeModal}>
                    ×
                </span>
                {modal.content}
            </div>
        </div>
    );
};

export default Modal;
