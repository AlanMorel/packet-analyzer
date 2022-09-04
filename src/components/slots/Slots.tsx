import { useSlotsState } from "@/src/atoms/Slot";
import { Slot } from "@/src/utils/Interfaces";
import { ReactElement } from "react";

import "@/src/components/slots/Slots.scss";

const Slots = (): ReactElement => {
    const { slots, renameSlot, loadSlot, saveSlot } = useSlotsState();

    return (
        <div className="packet-analyzer__slots">
            {slots.map((slot: Slot, index: number) => (
                <div className="packet-analyzer__structure" key={index}>
                    <div className="packet-analyzer__slot-label">Slot {index + 1}</div>
                    <input
                        type="text"
                        className="packet-analyzer__label"
                        value={slot.label}
                        onInput={(event): void => renameSlot(event, index)}
                    />
                    <div className="packet-analyzer__options">
                        <button className="packet-analyzer__option" onClick={(): void => loadSlot(index)}>
                            Load
                        </button>
                        <button className="packet-analyzer__option" onClick={(): void => saveSlot(index)}>
                            Save
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slots;
