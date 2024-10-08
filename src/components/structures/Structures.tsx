"use client";

import useStructure from "@/src/atoms/StructureAtom";
import UnitLabel from "@/src/components/unit-label/UnitLabel";
import useSortable from "@/src/mixins/Sortable";
import { Structure } from "@/src/utils/Interfaces";
import { ReactElement, useRef } from "react";

export default function Structures(): ReactElement {
    const { structure, deleteStructure, swapStructures, onLabelRename } = useStructure();

    const list = useRef<HTMLUListElement>(null);

    const { onDragStart, onDragOver } = useSortable(list, swapStructures);

    return (
        <ul className="border-t border-darken05 pt-2" ref={list}>
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
                        className="mr-2 w-full rounded border border-solid border-transparent bg-transparent px-1 py-[0.1rem] text-sm outline-none group-hover:bg-darken05"
                        value={struct.label}
                        onInput={(event): void => onLabelRename(event, index)}
                    />
                    <div className="hidden group-hover:flex">
                        <button
                            className="mr-1 cursor-pointer rounded border  border-none border-black bg-transparent px-2 text-sm last:mr-0 hover:bg-darken05"
                            onClick={(): void => deleteStructure(index)}
                        >
                            ×
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
