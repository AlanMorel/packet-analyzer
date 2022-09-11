import { useStructureState } from "@/src/atoms/Structure";
import "@/src/components/structures/Structures.scss";
import UnitLabel from "@/src/components/unit-label/UnitLabel";
import useSortable from "@/src/mixins/Sortable";
import { Structure } from "@/src/utils/Interfaces";
import { ReactElement, useRef } from "react";

const Structures = (): ReactElement => {
    const { structure, deleteStructure, swapStructures, onLabelRename } = useStructureState();

    const list = useRef<HTMLUListElement>(null);

    const { onDragStart, onDragOver } = useSortable(list, swapStructures);

    return (
        <ul className="packet-analyzer__structures" ref={list}>
            {structure.map((struct: Structure, index: number) => (
                <li
                    className="packet-analyzer__section-item"
                    key={index}
                    draggable="true"
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                >
                    <UnitLabel unit={struct.unit.toLowerCase()} />
                    <input
                        type="text"
                        className="packet-analyzer__label"
                        value={struct.label}
                        onInput={(event): void => onLabelRename(event, index)}
                    />
                    <div className="packet-analyzer__options">
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
