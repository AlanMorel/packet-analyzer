import RawData from "@/src/components/raw-data/RawData";
import Slots from "@/src/components/slots/Slots";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import Structures from "@/src/components/structures/Structures";

import "@/src/components/right-panel/RightPanel.scss";

const RightPanel = (): JSX.Element => {
    return (
        <ul className="packet-analyzer__right-panel">
            <li className="packet-analyzer__section">
                <Slots />
            </li>
            <li className="packet-analyzer__section">
                <StructureButtons />
                <Structures />
                <RawData />
            </li>
        </ul>
    );
};

export default RightPanel;
