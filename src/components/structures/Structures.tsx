import { useStructureState } from "@/src/atoms/Structure";
import "@/src/components/structures/Structures.scss";
import UnitLabel from "@/src/components/unit-label/UnitLabel";
import useSortable from "@/src/mixins/Sortable";
import { Structure } from "@/src/utils/Interfaces";
import { useRef } from "react";

const Structures = (): JSX.Element => {
    const { structure, deleteStructure, swapStructures, onLabelRename } = useStructureState();

    const list = useRef<HTMLUListElement>(null);

    const { onDragStart, onDragOver } = useSortable(list, swapStructures);

    return (
        <ul className="packet-analyzer__structures pt-2" ref={list}>
            {structure.map((struct: Structure, index: number) => (
                <li
                    className="packet-analyzer__section-item group relative flex px-0 py-1"
                    key={index}
                    draggable="true"
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                >
                    <UnitLabel unit={struct.unit.toLowerCase()} />
                    <input
                        type="text"
                        className="packet-analyzer__label mr-2 w-full rounded border border-solid border-transparent bg-transparent px-1 py-[0.1rem] text-sm outline-none"
                        value={struct.label}
                        onInput={(event): void => onLabelRename(event, index)}
                    />
                    <div className="hidden group-hover:flex">
                        <button
                            className="packet-analyzer__option mr-1 cursor-pointer rounded border-none bg-transparent px-2 text-sm last:mr-0"
                            onClick={(): void => deleteStructure(index)}
                        >
                            ×
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Structures;
