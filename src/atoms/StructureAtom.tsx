import { defaultStructure } from "@/src/utils/Defaults";
import { Structure, UnitTypes } from "@/src/utils/Interfaces";
import { atom, useAtom } from "jotai";
import { FormEvent } from "react";

const structureAtom = atom<Structure[]>(defaultStructure);

interface IStructure {
    structure: Structure[];
    setStructure: (value: Structure[]) => void;
    addStructure: (unit: UnitTypes) => void;
    deleteStructure: (index: number) => void;
    onLabelRename: (event: FormEvent<EventTarget>, index: number) => void;
    updateStructure: (event: FormEvent<EventTarget>) => void;
    swapStructures: (index1: number, index2: number) => void;
}

export default function useStructure(): IStructure {
    const [structure, setStructure] = useAtom(structureAtom);

    function addStructure(unit: UnitTypes): void {
        const newValue: Structure = {
            unit: unit,
            label: `unk ${unit}`
        };
        const newStructure = [...structure, newValue];
        setStructure(newStructure);
    }

    function deleteStructure(index: number): void {
        const newStructure = [...structure];
        newStructure.splice(index, 1);
        setStructure(newStructure);
    }

    function onLabelRename(event: FormEvent<EventTarget>, index: number): void {
        const target = event.target as HTMLInputElement;
        const label = target.value;

        const newStucture = {
            ...structure[index],
            label: label
        };

        const newStructureArray = [...structure];
        newStructureArray[index] = newStucture;

        setStructure(newStructureArray);
    }

    function updateStructure(event: FormEvent<EventTarget>): void {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        setStructure(JSON.parse(value));
    }

    function swapStructures(index1: number, index2: number): void {
        const newStructure = [...structure];
        const temp = newStructure[index1];
        newStructure[index1] = newStructure[index2];
        newStructure[index2] = temp;
        setStructure(newStructure);
    }

    return {
        structure,
        setStructure,
        addStructure,
        deleteStructure,
        swapStructures,
        onLabelRename,
        updateStructure
    };
}
