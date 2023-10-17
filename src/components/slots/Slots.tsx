"use client";

import { useSlotsState } from "@/src/atoms/Slot";
import { Slot } from "@/src/utils/Interfaces";
import { ReactElement } from "react";

const Slots = (): ReactElement => {
    const { slots, renameSlot, loadSlot, saveSlot } = useSlotsState();

    return (
        <ul>
            {slots.map((slot: Slot, index: number) => (
                <li className="group relative flex px-0 py-1" key={index}>
                    <div className="mr-2 min-w-[2.75rem] rounded bg-[--darken-contrast-05] p-1 text-xs text-[--contrast-black]">
                        Slot {index + 1}
                    </div>
                    <input
                        type="text"
                        className="mr-2 w-full rounded border border-solid border-transparent bg-transparent px-1 py-[0.1rem] text-sm outline-none group-hover:bg-[--darken-contrast-05]"
                        value={slot.label}
                        onInput={(event): void => renameSlot(event, index)}
                    />
                    <div className="hidden group-hover:flex">
                        <button
                            className="mr-1 cursor-pointer rounded border border-none border-[--contrast-black] bg-transparent px-2 text-sm text-[--contrast-black] last:mr-0 hover:bg-[--darken-contrast-05]"
                            onClick={(): void => loadSlot(index)}
                        >
                            Load
                        </button>
                        <button
                            className="mr-1 cursor-pointer rounded border border-none border-[--contrast-black] bg-transparent px-2 text-sm text-[--contrast-black] last:mr-0 hover:bg-[--darken-contrast-05]"
                            onClick={(): void => saveSlot(index)}
                        >
                            Save
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Slots;
