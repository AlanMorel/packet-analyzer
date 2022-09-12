import { atom, SetterOrUpdater, useRecoilState } from "recoil";

const toastState = atom({
    key: "toastState",
    default: ""
});

interface ITtoast {
    toast: string;
    setToast: SetterOrUpdater<string>;
}

export const useToastState = (): ITtoast => {
    const [toast, setToast] = useRecoilState(toastState);

    return { toast, setToast };
};
