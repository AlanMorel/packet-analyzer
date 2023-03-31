import RawData from "@/src/components/raw-data/RawData";
import Slots from "@/src/components/slots/Slots";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import Structures from "@/src/components/structures/Structures";

import "@/src/components/right-panel/RightPanel.scss";

const RightPanel = (): JSX.Element => {
    return (
        <ul className="max-w-[18rem]">
            <li className="packet-analyzer__section mb-4 rounded-sm px-2 py-1">
                <Slots />
            </li>
            <li className="packet-analyzer__section mb-4 rounded-sm px-2 py-1">
                <StructureButtons />
                <Structures />
                <RawData />
            </li>
        </ul>
    );
};

export default RightPanel;
