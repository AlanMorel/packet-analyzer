import Main from "@/src/components/main/Main";
import Modal from "@/src/components/modal/Modal";
import Toast from "@/src/components/toast/Toast";

import "@/assets/scss/base.scss";
import "@/src/App.scss";
import "@/src/globals.css";

export default function App(): JSX.Element {
    return (
        <div className="app m-auto max-w-[70rem] p-8">
            <h1>Packet Analyzer</h1>
            <h2>Use the packet analyzer to help you figure out and define the structures of packets</h2>
            <Main />
            <Toast />
            <Modal />
        </div>
    );
}
