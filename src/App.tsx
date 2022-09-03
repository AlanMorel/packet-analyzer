import "@/src/App.css";
import logo from "@/src/assets/logo.png";
import PacketAnalyzer from "@/src/components/packet-analyzer/PacketAnalyzer";

function App() {
    return (
        <div className="app">
            <img src={logo} alt="Logo" />
            <h1>Packet Analyzer</h1>
            <PacketAnalyzer />
        </div>
    );
}

export default App;
