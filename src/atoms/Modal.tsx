import { atom, useRecoilState } from "recoil";

const modalState = atom({
    key: "modalState",
    default: {
        content: <></>,
        open: false
    }
});

interface IModal {
    modal: {
        content: JSX.Element;
        open: boolean;
    };
    openModal: (content: JSX.Element) => void;
    closeModal: () => void;
}

export const useModalState = (): IModal => {
    const [modal, setModal] = useRecoilState(modalState);

    const closeModal = (): void => {
        const newModal = {
            content: modal.content,
            open: false
        };
        setModal(newModal);
    };

    const openModal = (content: JSX.Element): void => {
        const newModal = { ...modal };
        newModal.open = true;
        newModal.content = content;
        setModal(newModal);
    };

    return { modal, openModal, closeModal };
};
