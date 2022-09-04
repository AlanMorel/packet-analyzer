export interface Structure {
    unit: UnitTypes;
    label: string;
}

export type UnitTypes =
    | "byte"
    | "short"
    | "int"
    | "long"
    | "float"
    | "asciiStr"
    | "mapleStr"
    | "coordsF"
    | "coordsS"
    | "coordsB"
    | "opcode";

export interface Slot {
    input: string;
    label: string;
    structure: Structure[];
}
