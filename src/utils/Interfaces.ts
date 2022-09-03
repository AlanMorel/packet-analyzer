export interface Structure {
    unit: string;
    label: string;
}

export interface Slot {
    input: string;
    label: string;
    structure: Structure[];
}
