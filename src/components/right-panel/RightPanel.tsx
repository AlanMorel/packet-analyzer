import RawData from "@/src/components/raw-data/RawData";
import Slots from "@/src/components/slots/Slots";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import Structures from "@/src/components/structures/Structures";

const RightPanel = (): JSX.Element => {
    return (
        <ul className="max-w-[18rem]">
            <li className="mb-4 rounded bg-[--light-component-background-color] px-2 py-1 text-[--contrast-black]">
                <Slots />
            </li>
            <li className="mb-4 rounded bg-[--light-component-background-color] px-2 py-1 text-[--contrast-black]">
                <StructureButtons />
                <Structures />
                <RawData />
            </li>
        </ul>
    );
};

export default RightPanel;
