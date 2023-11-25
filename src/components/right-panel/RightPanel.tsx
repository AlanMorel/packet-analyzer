import RawData from "@/src/components/raw-data/RawData";
import Slots from "@/src/components/slots/Slots";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import Structures from "@/src/components/structures/Structures";
import { ReactElement } from "react";

export default function RightPanel(): ReactElement {
    return (
        <ul className="max-w-[18rem]">
            <li className="mb-4 rounded bg-lighten95 px-2 py-1">
                <Slots />
            </li>
            <li className="mb-4 rounded bg-lighten95 px-2 py-1">
                <StructureButtons />
                <Structures />
                <RawData />
            </li>
        </ul>
    );
}
