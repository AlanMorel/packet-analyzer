export interface Structure {
    unit: UnitTypes;
    label: string;
}

export const unitTypes = [
    "byte",
    "short",
    "int",
    "long",
    "float",
    "asciiStr",
    "mapleStr",
    "coordsF",
    "coordsS",
    "coordsB",
    "opcode"
] as const;

export type UnitTypes = typeof unitTypes[number];

export interface Slot {
    input: string;
    label: string;
    structure: Structure[];
}
