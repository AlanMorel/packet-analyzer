import { atom, useAtom } from "jotai";

const toastAtom = atom<string>("");

interface ITtoast {
    toast: string;
    setToast: (value: string) => void;
}

export const useToastState = (): ITtoast => {
    const [toast, setToast] = useAtom(toastAtom);

    return { toast, setToast };
};
