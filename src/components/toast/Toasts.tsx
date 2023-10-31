import ToastContainer from "@/src/components/toast/ToastContainer";
import { CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

export const showToast = (message: string): void => {
    toast.custom(instance => <ToastContainer instance={instance} Icon={CheckCircle2} message={message} />);
};
