import "@/src/App.scss";
import logo from "@/src/assets/logo.png";
import PacketAnalyzer from "@/src/components/packet-analyzer/PacketAnalyzer";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <div className="app">
                <img src={logo} alt="Logo" />
                <h1>Packet Analyzer</h1>
                <PacketAnalyzer />
            </div>
        </RecoilRoot>
    );
}

export default App;
