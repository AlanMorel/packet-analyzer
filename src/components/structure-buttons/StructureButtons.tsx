import { useStructureState } from "@/src/atoms/Structure";
import { ReactElement } from "react";

import "@/src/components/structure-buttons/StructureButtons.scss";

const StructureButtons = (): ReactElement => {
    const { addStructure } = useStructureState();

    return (
        <div className="packet-analyzer__buttons">
            <button onClick={(): void => addStructure("opcode")}>+ Opcode</button>
            <button onClick={(): void => addStructure("byte")}>+ Byte</button>
            <button onClick={(): void => addStructure("short")}>+ Short</button>
            <button onClick={(): void => addStructure("int")}>+ Int</button>
            <button onClick={(): void => addStructure("float")}>+ Float</button>
            <button onClick={(): void => addStructure("long")}>+ Long</button>
            <button onClick={(): void => addStructure("asciiStr")}>+ Ascii String</button>
            <button onClick={(): void => addStructure("mapleStr")}>+ Maple String</button>
            <button onClick={(): void => addStructure("coordsB")}>+ Coords B</button>
            <button onClick={(): void => addStructure("coordsS")}>+ Coords S</button>
            <button onClick={(): void => addStructure("coordsF")}>+ Coords F</button>
        </div>
    );
};

export default StructureButtons;
