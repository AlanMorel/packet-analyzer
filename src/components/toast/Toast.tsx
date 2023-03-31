import { useToastState } from "@/src/atoms/Toast";
import XButton from "@/src/components/buttons/x-button/XButton";
import { useEffect, useState } from "react";

import "@/src/components/toast/Toast.scss";

const Toast = (): JSX.Element => {
    const [active, setActive] = useState(false);
    const [interval, setInterval] = useState<NodeJS.Timeout>();
    const { toast, setToast } = useToastState();

    useEffect(() => {
        showToast();
    }, [toast]);

    const showToast = (): void => {
        if (toast.length < 1) {
            return;
        }

        clearTimeout(interval);
        setActive(true);
        setInterval(setTimeout(closeToast, 5000));
    };

    const closeToast = (): void => {
        clearTimeout(interval);
        setActive(false);

        setTimeout(() => {
            setToast("");
        }, 1000);
    };

    return (
        <div
            className={`z-101 fixed bottom-0 left-0 right-0 translate-y-full transform select-none px-4 text-center opacity-0 transition-all duration-500 ease-out ${
                active ? "toast--active -translate-y-8 transform opacity-100" : ""
            }`}
        >
            <div className="toast__content relative inline-block rounded-md bg-black bg-opacity-75 px-8 py-3 text-lg text-white shadow-lg backdrop-blur">
                <XButton onClick={(): void => closeToast()} className="right--1 top--1 bg-red-600 hover:bg-red-700" />
                {toast}
                <div className="toast__bar absolute bottom-0 left-0 h-1 bg-white"></div>
            </div>
        </div>
    );
};

export default Toast;
