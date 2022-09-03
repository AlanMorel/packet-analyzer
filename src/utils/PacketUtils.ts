import { Structure } from "@/src/utils/Interfaces";

export const littleEndianHexStringToDecimal = (string: string) => {
    const len = string.length;
    let bigEndianHexString = "0x";
    for (let i = 0; i < len / 2; i++) {
        bigEndianHexString += string.substring(len - (i + 1) * 2, len - i * 2);
    }
    return parseInt(bigEndianHexString);
};

export const bigEndianHexStringToDecimal = (hex: string) => {
    const decimal = littleEndianHexStringToDecimal(hex);
    return ((decimal & 0xff) << 8) | ((decimal >> 8) & 0xff);
};

export const hex2a = (hex: string) => {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        const v = parseInt(hex.substring(i, i + 2), 16);
        if (v) {
            str += String.fromCharCode(v);
        }
    }
    return str;
};

export const addSpacesToPacket = (packet: string): string => {
    const match = packet.match(/.{1,2}/g);
    if (match) {
        return match.join(" ");
    }
    return "";
};

export const parsePacket = (packet: string, structure: Structure[]) => {
    packet = packet.replace(/\s/g, "");
    let results = "";
    let index = 0;
    for (const struct of structure) {
        let size = 0;
        if (struct.unit === "byte") {
            size = 1;
        } else if (struct.unit === "short" || struct.unit === "opcode") {
            size = 2;
        } else if (struct.unit === "int") {
            size = 4;
        } else if (struct.unit === "long") {
            size = 8;
        } else if (struct.unit === "ascii str") {
            size = 2;

            if (index + size * 2 > packet.length) {
                break;
            }

            const rawSize = packet.slice(index, index + size * 2);
            size += littleEndianHexStringToDecimal(rawSize) * 2;
        } else if (struct.unit === "maple str") {
            size = 2;

            if (index + size > packet.length) {
                break;
            }

            const rawSize = packet.slice(index, index + size);
            size += littleEndianHexStringToDecimal(rawSize);
        } else if (struct.unit === "coordsF") {
            size = 12;
        } else if (struct.unit === "coordsS") {
            size = 6;
        }

        if (index + size * 2 > packet.length) {
            break;
        }

        const rawPacket = packet.slice(index, index + size * 2);

        let value = "";
        if (struct.unit === "ascii str" || struct.unit === "maple str") {
            value = hex2a(rawPacket.substring(4));
        } else if (struct.unit === "coordsF") {
            value += "X:" + bigEndianHexStringToDecimal(rawPacket.substring(0, 8));
            value += " Y:" + bigEndianHexStringToDecimal(rawPacket.substring(8, 16));
            value += " Z:" + bigEndianHexStringToDecimal(rawPacket.substring(16, 24));
        } else if (struct.unit === "coordsS") {
            value += "X:" + bigEndianHexStringToDecimal(rawPacket.substring(0, 4));
            value += " Y:" + bigEndianHexStringToDecimal(rawPacket.substring(4, 8));
            value += " Z:" + bigEndianHexStringToDecimal(rawPacket.substring(8, 12));
        } else {
            const decimal = littleEndianHexStringToDecimal(rawPacket);
            value = decimal + " (0x" + decimal.toString(16).toUpperCase() + ")";
        }

        results += addSpacesToPacket(rawPacket) + " // " + struct.label + ": " + value + "\n";
        index += size * 2;
    }

    if (index < packet.length) {
        results += addSpacesToPacket(packet.substring(index)) + " // rest of the packet";
    }

    return results;
};
