import { atom, useAtom } from "jotai";
import { ReactElement } from "react";

type ModalState = {
    content: ReactElement;
    open: boolean;
};

interface IModalState {
    modal: ModalState;
    setOpenState: (open: boolean) => void;
    openModal: (content: ReactElement) => void;
    closeModal: () => void;
}

const modalAtom = atom<ModalState>({
    content: <></>,
    open: false
});

const useModalState = (): IModalState => {
    const [modal, setModal] = useAtom(modalAtom);

    const setOpenState = (open: boolean): void => {
        const newModal = {
            content: modal.content,
            open
        };
        setModal(newModal);
    };

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
        setOpenState,
        openModal,
        closeModal
    };
};

export default useModalState;
