import { Slot, Structure } from "@/src/utils/Interfaces";

export const defaultPacket =
    "1D 00 11 11 11 11 11 11 11 11 77 77 77 77 77 77 77 77 09 00 53 00 68 00 61 00 72 00 70 00 41 00 63 00 65 00 58 00 00 05 00 68 00 65 00 6C 00 6C 00 6F 00 00 00 00 00 00 00 00 00 00 00\n1D 00 11 11 11 11 11 11 11 11 77 77 77 77 77 77 77 77 09 00 53 00 68 00 61 00 72 00 70 00 41 00 63 00 65 00 58 00 00 05 00 77 00 6F 00 72 00 6C 00 64 00 00 00 00 00 00 00 00 00 00 00";

export const MAX_SLOT_SIZE = 5;

export const defaultSlots = (): Slot[] => {
    const slotsDefault = [];
    for (let i = 0; i < MAX_SLOT_SIZE; i++) {
        slotsDefault.push({
            label: `Slot ${i + 1} Label`,
            input: "",
            structure: []
        });
    }
    return slotsDefault;
};

export const defaultStructure: Structure[] = [
    {
        unit: "opcode",
        label: "USER_CHAT"
    },
    {
        unit: "long",
        label: "account id"
    },
    {
        unit: "long",
        label: "character id"
    },
    {
        unit: "asciiStr",
        label: "character name"
    },
    {
        unit: "byte",
        label: "unk byte"
    },
    {
        unit: "asciiStr",
        label: "message"
    },
    {
        unit: "int",
        label: "type"
    },
    {
        unit: "byte",
        label: "unk byte"
    },
    {
        unit: "int",
        label: "channel"
    },
    {
        unit: "byte",
        label: "unk byte"
    }
];
