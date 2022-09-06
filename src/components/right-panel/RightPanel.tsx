import RawData from "@/src/components/raw-data/RawData";
import Slots from "@/src/components/slots/Slots";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import Structures from "@/src/components/structures/Structures";
import { ReactElement } from "react";

import "@/src/components/right-panel/RightPanel.scss";

const RightPanel = (): ReactElement => {
    return (
        <ul className="packet-analyzer__right-panel">
            <li className="packet-analyzer__section">
                <Structures />
                <StructureButtons />
                <RawData />
            </li>
            <li className="packet-analyzer__section">
                <Slots />
            </li>
        </ul>
    );
};

export default RightPanel;
