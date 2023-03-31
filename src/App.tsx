import Main from "@/src/components/main/Main";
import Modal from "@/src/components/modal/Modal";
import Toast from "@/src/components/toast/Toast";

import "@/assets/scss/base.scss";
import "@/src/App.scss";

const App = (): JSX.Element => {
    return (
        <div className="app">
            <h1>Packet Analyzer</h1>
            <h2>Use the packet analyzer to help you figure out and define the structures of packets</h2>

            <Main />
            <Toast />
            <Modal />
        </div>
    );
};

export default App;
