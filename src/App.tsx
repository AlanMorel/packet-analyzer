import logo from "@/assets/images/logo.png";
import Main from "@/src/components/main/Main";
import { ReactElement } from "react";
import { RecoilRoot } from "recoil";

import "@/assets/scss/base.scss";
import "@/src/App.scss";

const App = (): ReactElement => {
    return (
        <div className="app">
            <img src={logo} alt="Logo" />
            <h1>Packet Analyzer</h1>
            <RecoilRoot>
                <Main />
            </RecoilRoot>
        </div>
    );
};

export default App;
