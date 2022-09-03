import "@/src/App.css";

import PacketAnalyzer from "@/src/components/packet-analyzer/PacketAnalyzer";

function App() {
    return (
        <div className="app">
            <img src="./logo.png" alt="Logo" />
            <h1>Packet Analyzer</h1>
            <PacketAnalyzer />
        </div>
    );
}

export default App;
