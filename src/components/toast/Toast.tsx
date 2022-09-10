import { useToastState } from "@/src/atoms/Toast";
import XButton from "@/src/components/buttons/x-button/XButton";
import { ReactElement, useEffect, useState } from "react";

import "@/src/components/toast/Toast.scss";

const Toast = (): ReactElement => {
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
        <div className={`toast ${active ? "toast--active" : ""}`}>
            <div className="toast__content">
                <XButton onClick={(): void => closeToast()} />
                {toast}
                <div className="toast__bar"></div>
            </div>
        </div>
    );
};

export default Toast;
