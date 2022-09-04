import { useStructureState } from "@/src/atoms/Structure";

import "@/src/components/structure-buttons/StructureButtons.scss";

function StructureButtons() {
    const { addStructure } = useStructureState();

    return (
        <div className="packet-analyzer__buttons">
            <button onClick={() => addStructure("opcode")}>+ Opcode</button>
            <button onClick={() => addStructure("byte")}>+ Byte</button>
            <button onClick={() => addStructure("short")}>+ Short</button>
            <button onClick={() => addStructure("int")}>+ Int</button>
            <button onClick={() => addStructure("float")}>+ Float</button>
            <button onClick={() => addStructure("long")}>+ Long</button>
            <button onClick={() => addStructure("asciiStr")}>+ Ascii String</button>
            <button onClick={() => addStructure("mapleStr")}>+ Maple String</button>
            <button onClick={() => addStructure("coordsB")}>+ Coords B</button>
            <button onClick={() => addStructure("coordsS")}>+ Coords S</button>
            <button onClick={() => addStructure("coordsF")}>+ Coords F</button>
        </div>
    );
}

export default StructureButtons;
