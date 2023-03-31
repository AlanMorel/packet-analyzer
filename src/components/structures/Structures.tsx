import { useStructureState } from "@/src/atoms/Structure";
import UnitLabel from "@/src/components/unit-label/UnitLabel";
import useSortable from "@/src/mixins/Sortable";
import { Structure } from "@/src/utils/Interfaces";
import { useRef } from "react";

const Structures = (): JSX.Element => {
    const { structure, deleteStructure, swapStructures, onLabelRename } = useStructureState();

    const list = useRef<HTMLUListElement>(null);

    const { onDragStart, onDragOver } = useSortable(list, swapStructures);

    return (
        <ul className="border-t border-[--darken-contrast-05] pt-2" ref={list}>
            {structure.map((struct: Structure, index: number) => (
                <li
                    className="group relative flex cursor-grab px-0 py-1 active:cursor-grabbing"
                    key={index}
                    draggable="true"
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                >
                    <UnitLabel unit={struct.unit.toLowerCase()} />
                    <input
                        type="text"
                        className="mr-2 w-full rounded border border-solid border-transparent bg-transparent px-1 py-[0.1rem] text-sm outline-none group-hover:bg-[--darken-contrast-05]"
                        value={struct.label}
                        onInput={(event): void => onLabelRename(event, index)}
                    />
                    <div className="hidden group-hover:flex">
                        <button
                            className="mr-1 cursor-pointer rounded border  border-none border-[--contrast-black] bg-transparent px-2 text-sm text-[--contrast-black] last:mr-0 hover:bg-[--darken-contrast-05]"
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
