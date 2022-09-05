import PacketAnalyzerData from "@/src/components/packet-analyzer-data/PacketAnalyzerData";
import PacketStructures from "@/src/components/packet-structures/PacketStructures";
import Slots from "@/src/components/slots/Slots";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import { ReactElement } from "react";

import "@/src/components/right-panel/RightPanel.scss";

const RightPanel = (): ReactElement => {
    return (
        <div className="packet-analyzer__right-panel">
            <div className="packet-analyzer__section">
                <PacketStructures />
                <StructureButtons />
                <PacketAnalyzerData />
            </div>
            <div className="packet-analyzer__section">
                <Slots />
            </div>
        </div>
    );
};

export default RightPanel;
