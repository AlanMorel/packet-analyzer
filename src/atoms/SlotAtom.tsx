import useInput from "@/src/atoms/InputAtom";
import useStructure from "@/src/atoms/StructureAtom";
import { showToast } from "@/src/components/toast/Toasts";
import { defaultSlots, MAX_SLOT_SIZE } from "@/src/utils/Defaults";
import { Slot } from "@/src/utils/Interfaces";
import { atom, useAtom } from "jotai";
import { FormEvent } from "react";

const storage = typeof window !== "undefined" ? localStorage : undefined;

function getSlots(): Slot[] {
    const slotsDefault = defaultSlots();

    if (!storage) {
        return slotsDefault;
    }

    let slotsJSON = storage.getItem("slots");

    if (slotsJSON) {
        return JSON.parse(slotsJSON).slice(0, MAX_SLOT_SIZE);
    }

    slotsJSON = JSON.stringify(slotsDefault);
    storage.setItem("slots", slotsJSON);

    return slotsDefault;
}

type SlotState = Slot[];

const slotState = atom<SlotState>(getSlots());

interface ISlot {
    slots: Slot[];
    setSlots: (value: Slot[]) => void;
    loadSlot: (index: number) => void;
    saveSlot: (index: number) => void;
    renameSlot: (event: FormEvent<EventTarget>, index: number) => void;
}

export default function useSlots(): ISlot {
    const [slots, setSlots] = useAtom(slotState);
    const { structure, setStructure } = useStructure();
    const { input, setInput } = useInput();

    function loadSlot(index: number): void {
        const slotsJSON = localStorage.getItem("slots") as string;
        const slotsData = JSON.parse(slotsJSON);

        const newSlots = [...slots];
        newSlots[index] = slotsData[index];

        setSlots(newSlots);
        setInput(newSlots[index].input);
        setStructure(newSlots[index].structure);

        showToast(`Slot ${index + 1} "${newSlots[index].label}" loaded.`);
    }

    function saveSlot(index: number): void {
        const newSlot = {
            label: slots[index].label,
            input: input,
            structure: structure
        };

        const newSlots = [...slots];
        newSlots[index] = newSlot;

        const slotsJSON = JSON.stringify(newSlots);
        localStorage.setItem("slots", slotsJSON);

        showToast(`Slot ${index + 1} "${newSlots[index].label}" saved.`);
    }

    function renameSlot(event: FormEvent<EventTarget>, index: number): void {
        const target = event.target as HTMLInputElement;
        const label = target.value;

        const newSlot = {
            ...slots[index],
            label: label
        };

        const newSlots = [...slots];
        newSlots[index] = newSlot;

        setSlots(newSlots);
    }

    return { slots, setSlots, loadSlot, saveSlot, renameSlot };
}
