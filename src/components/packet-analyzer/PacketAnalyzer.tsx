import "@/src/components/packet-analyzer/PacketAnalyzer.scss";
import { defaultPacket, defaultStructure } from "@/src/utils/Defaults";
import { Slot, Structure, UnitTypes } from "@/src/utils/Interfaces";
import { parsePacket } from "@/src/utils/PacketUtils";
import { useMemo, useState } from "react";

const getSlots = (): Slot[] => {
    let slotsJSON = localStorage.getItem("slots");
    if (!slotsJSON) {
        const slotsDefault = [];
        for (let i = 0; i < 10; i++) {
            slotsDefault.push({
                label: "Slot " + (i + 1) + " Label",
                input: "",
                structure: []
            });
        }
        slotsJSON = JSON.stringify(slotsDefault);
        localStorage.setItem("slots", slotsJSON);
    }
    return JSON.parse(slotsJSON);
};

function PacketAnalyzer() {
    const [input, setInput] = useState(defaultPacket);
    const [structure, setStructure] = useState(defaultStructure);
    const [slots, setSlots] = useState(getSlots());

    const addStructure = (unit: UnitTypes, label: string | undefined = undefined) => {
        const newValue: Structure = {
            unit: unit,
            label: label ?? "unk " + unit
        };
        const newStructure = [...structure, newValue];
        setStructure(newStructure);
    };

    const deleteStructure = (index: number) => {
        const newStructure = [...structure];
        newStructure.splice(index, 1);
        setStructure(newStructure);
    };

    const onLabelRename = (event: React.FormEvent<EventTarget>, index: number) => {
        const target = event.target as HTMLInputElement;
        const label = target.value;
        const newStructure = [...structure];
        newStructure[index].label = label;
        setStructure(newStructure);
    };

    const loadSlot = (index: number) => {
        const slotsJSON = localStorage.getItem("slots") as string;
        const slotsData = JSON.parse(slotsJSON);

        const newSlots = [...slots];
        newSlots[index] = slotsData[index];

        setSlots(newSlots);

        setInput(newSlots[index].input);
        setStructure(newSlots[index].structure);

        alert("Slot " + (index + 1) + " loaded.");
    };

    const saveSlot = (index: number) => {
        const newSlot = {
            label: slots[index].label,
            input: input,
            structure: structure
        };

        const newSlots = [...slots];
        newSlots[index] = newSlot;

        const slotsJSON = JSON.stringify(newSlots);
        localStorage.setItem("slots", slotsJSON);

        alert("Slot " + (index + 1) + " saved.");
    };

    const structureChange = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        setStructure(JSON.parse(value));
    };

    const moveStructure = (index: number, amount: number) => {
        if (index + amount < 0 || index + amount >= structure.length) {
            return;
        }
        const temp = structure[index];
        const newStructure = [...structure];
        newStructure[index] = newStructure[index + amount];
        newStructure[index + amount] = temp;
        setStructure(newStructure);
    };

    const onSlotRename = (event: React.FormEvent<EventTarget>, index: number) => {
        const target = event.target as HTMLInputElement;
        const label = target.value;
        const newSlots = [...slots];
        newSlots[index].label = label;
        setSlots(newSlots);
    };

    const output = useMemo(() => {
        return input.split("\n").map(packet => parsePacket(packet, structure));
    }, [input, structure]);

    const stringified = useMemo(() => {
        return JSON.stringify(structure);
    }, [structure]);

    return (
        <div className="packet-analyzer">
            <div className="packet-analyzer__input">
                <textarea
                    placeholder="Enter packets, one on each line"
                    value={input}
                    wrap="off"
                    onChange={event => setInput(event.target.value)}
                />
            </div>
            <div className="packet-analyzer__output">
                <div className="packet-analyzer__outputs">
                    {output.map((packet, index) => (
                        <textarea disabled={true} wrap="off" value={packet} key={index} />
                    ))}
                </div>
                <div className="packet-analyzer__right-panel">
                    <div className="packet-analyzer__packet-structures">
                        {structure.map((struct, index) => (
                            <div className="packet-analyzer__structure" key={index}>
                                <div
                                    className={`packet-analyzer__unit ${
                                        "packet-analyzer__unit--" + struct.unit.toLowerCase().replace(/\s+/g, "-")
                                    }`}
                                >
                                    {struct.unit}
                                </div>
                                <input
                                    type="text"
                                    className="packet-analyzer__label"
                                    value={struct.label}
                                    onInput={event => onLabelRename(event, index)}
                                />
                                <div className="packet-analyzer__options">
                                    <button
                                        className="packet-analyzer__option"
                                        onClick={() => moveStructure(index, -1)}
                                    >
                                        ▴
                                    </button>
                                    <button className="packet-analyzer__option" onClick={() => moveStructure(index, 1)}>
                                        ▾
                                    </button>
                                    <button className="packet-analyzer__option" onClick={() => deleteStructure(index)}>
                                        ×
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="packet-analyzer__buttons">
                            <button onClick={() => addStructure("opcode", "Opcode")}>+ Opcode</button>
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
                        <div>
                            <input
                                type="text"
                                className="packet-analyzer__json"
                                value={stringified}
                                onInput={event => structureChange(event)}
                            />
                        </div>
                    </div>
                    <div className="packet-analyzer__slots">
                        {slots.map((slot, index) => (
                            <div className="packet-analyzer__structure" key={index}>
                                <div className="packet-analyzer__slot-label">Slot {index + 1}</div>
                                <input
                                    type="text"
                                    className="packet-analyzer__label"
                                    value={slot.label}
                                    onInput={event => onSlotRename(event, index)}
                                />
                                <div className="packet-analyzer__options">
                                    <button className="packet-analyzer__option" onClick={() => loadSlot(index)}>
                                        Load
                                    </button>
                                    <button className="packet-analyzer__option" onClick={() => saveSlot(index)}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PacketAnalyzer;
