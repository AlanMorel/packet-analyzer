import { useSlotsState } from "@/src/atoms/Slot";
import { Slot } from "@/src/utils/Interfaces";

import "@/src/components/slots/Slots.scss";

const Slots = (): JSX.Element => {
    const { slots, renameSlot, loadSlot, saveSlot } = useSlotsState();

    return (
        <ul>
            {slots.map((slot: Slot, index: number) => (
                <li className="packet-analyzer__section-item group relative flex px-0 py-1" key={index}>
                    <div className="packet-analyzer__slot-label mr-2 min-w-[2.75rem] rounded px-1 py-1 text-xs font-bold">
                        Slot {index + 1}
                    </div>
                    <input
                        type="text"
                        className="packet-analyzer__label mr-2 w-full rounded border border-solid border-transparent bg-transparent px-1 py-[0.1rem] text-sm outline-none"
                        value={slot.label}
                        onInput={(event): void => renameSlot(event, index)}
                    />
                    <div className="hidden group-hover:flex">
                        <button
                            className="packet-analyzer__option mr-1 cursor-pointer rounded border-none bg-transparent px-2 text-sm last:mr-0"
                            onClick={(): void => loadSlot(index)}
                        >
                            Load
                        </button>
                        <button
                            className="packet-analyzer__option mr-1 cursor-pointer rounded border-none bg-transparent px-2 text-sm last:mr-0"
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
