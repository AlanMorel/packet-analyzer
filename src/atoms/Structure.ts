import { defaultStructure } from "@/src/utils/Defaults";
import { Structure, UnitTypes } from "@/src/utils/Interfaces";
import { atom, useRecoilState } from "recoil";

const structureState = atom({
    key: "structureState",
    default: defaultStructure
});

export const useStructureState = () => {
    const [structure, setStructure] = useRecoilState(structureState);

    const addStructure = (unit: UnitTypes) => {
        const newValue: Structure = {
            unit: unit,
            label: "unk " + unit
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

        const newStucture = {
            ...structure[index],
            label: label
        };

        const newStructureArray = [...structure];
        newStructureArray[index] = newStucture;

        setStructure(newStructureArray);
    };

    const updateStructure = (event: React.FormEvent<EventTarget>) => {
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

    return { structure, setStructure, addStructure, deleteStructure, onLabelRename, updateStructure, moveStructure };
};