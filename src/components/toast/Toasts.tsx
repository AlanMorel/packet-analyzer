import ToastContainer from "@/src/components/toast/ToastContainer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

export const showToast = (message: string): void => {
    toast.custom(instance => <ToastContainer instance={instance} Icon={CheckCircleIcon} message={message} />);
};
