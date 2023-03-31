import { atom, useAtom } from "jotai";

type ModalState = {
    content: JSX.Element;
    open: boolean;
};

interface IModalState {
    modal: ModalState;
    openModal: (content: JSX.Element) => void;
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

    const openModal = (content: JSX.Element): void => {
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
