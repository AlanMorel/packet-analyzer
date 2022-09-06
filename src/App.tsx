import logo from "@/assets/images/logo.png";
import PacketAnalyzer from "@/src/components/packet-analyzer/PacketAnalyzer";
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
                <PacketAnalyzer />
            </RecoilRoot>
        </div>
    );
};

export default App;
