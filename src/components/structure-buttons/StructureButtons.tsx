import { useStructureState } from "@/src/atoms/Structure";
import { ReactElement } from "react";

import StructureButton from "@/src/components/structure-button/StructureButton";
import "@/src/components/structure-buttons/StructureButtons.scss";

const StructureButtons = (): ReactElement => {
    const { addStructure } = useStructureState();

    return (
        <div className="packet-analyzer__buttons">
            <StructureButton label="Opcode" onClick={(): void => addStructure("opcode")} />
            <StructureButton label="Byte" onClick={(): void => addStructure("byte")} />
            <StructureButton label="Short" onClick={(): void => addStructure("short")} />
            <StructureButton label="Int" onClick={(): void => addStructure("int")} />
            <StructureButton label="Float" onClick={(): void => addStructure("float")} />
            <StructureButton label="Long" onClick={(): void => addStructure("long")} />
            <StructureButton label="Ascii String" onClick={(): void => addStructure("asciiStr")} />
            <StructureButton label="Maple String" onClick={(): void => addStructure("mapleStr")} />
            <StructureButton label="Coords B" onClick={(): void => addStructure("coordsB")} />
            <StructureButton label="Coords S" onClick={(): void => addStructure("coordsS")} />
            <StructureButton label="Coords F" onClick={(): void => addStructure("coordsF")} />
        </div>
    );
};

export default StructureButtons;
