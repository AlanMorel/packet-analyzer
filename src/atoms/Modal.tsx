import { atom, useAtom } from "jotai";
import { ReactElement } from "react";

type ModalState = {
    content: ReactElement;
    open: boolean;
};

interface IModalState {
    modal: ModalState;
    openModal: (content: ReactElement) => void;
    closeModal: () => void;
}

const modalAtom = atom<ModalState>({
    content: <></>,
    open: false
});

export const useModalState = (): IModalState => {
    const [modal, setModal] = useAtom(modalAtom);

    const closeModal = (): void => {
        const newModal = {
            content: modal.content,
            open: false
        };
        setModal(newModal);
    };

    const openModal = (content: ReactElement): void => {
        const newModal = {
            content,
            open: true
        };
        setModal(newModal);
    };

    return {
        modal,
        openModal,
        closeModal
    };
};
