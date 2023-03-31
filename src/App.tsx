import Main from "@/src/components/main/Main";
import Modal from "@/src/components/modal/Modal";
import Toast from "@/src/components/toast/Toast";

import "@/src/globals.css";
import "@/src/styles/base.scss";

export default function App(): JSX.Element {
    return (
        <div className="app m-auto max-w-[70rem] p-8 text-center">
            <h1 className="mb-6 text-6xl">Packet Analyzer</h1>
            <h2 className="mb-8 text-2xl">
                Use the packet analyzer to help you figure out and define the structures of packets
            </h2>
            <Main />
            <Toast />
            <Modal />
        </div>
    );
}
