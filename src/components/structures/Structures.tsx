import { useStructureState } from "@/src/atoms/Structure";
import { Structure } from "@/src/utils/Interfaces";
import { ReactElement } from "react";

import "@/src/components/structures/Structures.scss";
import UnitLabel from "@/src/components/unit-label/UnitLabel";

const Structures = (): ReactElement => {
    const { structure, deleteStructure, onLabelRename, moveStructure } = useStructureState();

    return (
        <ul className="packet-analyzer__structures">
            {structure.map((struct: Structure, index: number) => (
                <li className="packet-analyzer__section-item" key={index}>
                    <UnitLabel unit={struct.unit.toLowerCase()} />
                    <input
                        type="text"
                        className="packet-analyzer__label"
                        value={struct.label}
                        onInput={(event): void => onLabelRename(event, index)}
                    />
                    <div className="packet-analyzer__options">
                        <button className="packet-analyzer__option" onClick={(): void => moveStructure(index, -1)}>
                            ▴
                        </button>
                        <button className="packet-analyzer__option" onClick={(): void => moveStructure(index, 1)}>
                            ▾
                        </button>
                        <button className="packet-analyzer__option" onClick={(): void => deleteStructure(index)}>
                            ×
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Structures;
