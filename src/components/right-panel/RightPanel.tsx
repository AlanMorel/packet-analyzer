import { useSlotsState } from "@/src/atoms/Slot";
import { useStructureState } from "@/src/atoms/Structure";
import StructureButtons from "@/src/components/structure-buttons/StructureButtons";
import { ReactElement, useMemo } from "react";

import "@/src/components/right-panel/RightPanel.scss";
import { Slot, Structure } from "@/src/utils/Interfaces";

function RightPanel(): ReactElement {
    const { structure, deleteStructure, onLabelRename, updateStructure, moveStructure } = useStructureState();
    const { slots, renameSlot, loadSlot, saveSlot } = useSlotsState();

    const stringified = useMemo(() => {
        return JSON.stringify(structure);
    }, [structure]);

    return (
        <div className="packet-analyzer__right-panel">
            <div className="packet-analyzer__packet-structures">
                {structure.map((struct: Structure, index: number) => (
                    <div className="packet-analyzer__structure" key={index}>
                        <div className={`packet-analyzer__unit packet-analyzer__unit--${struct.unit.toLowerCase()}`}>
                            {struct.unit}
                        </div>
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
                    </div>
                ))}
                <StructureButtons />
                <div>
                    <input
                        type="text"
                        className="packet-analyzer__json"
                        value={stringified}
                        onInput={(event): void => updateStructure(event)}
                    />
                </div>
            </div>
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
        </div>
    );
}

export default RightPanel;
