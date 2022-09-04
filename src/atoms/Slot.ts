import { useInputState } from "@/src/atoms/Input";
import { useStructureState } from "@/src/atoms/Structure";
import { Slot } from "@/src/utils/Interfaces";
import { atom, useRecoilState } from "recoil";

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

const slotState = atom({
    key: "slotState",
    default: getSlots()
});

export const useSlotsState = () => {
    const [slots, setSlots] = useRecoilState(slotState);
    const { structure, setStructure } = useStructureState();
    const { input, setInput } = useInputState();

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

    const renameSlot = (event: React.FormEvent<EventTarget>, index: number) => {
        const target = event.target as HTMLInputElement;
        const label = target.value;
        const newSlots = [...slots];
        newSlots[index].label = label;
        setSlots(newSlots);
    };

    return { slots, setSlots, loadSlot, saveSlot, renameSlot };
};
