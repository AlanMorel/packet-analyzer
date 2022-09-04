import { Structure } from "@/src/utils/Interfaces";

export const littleEndianHexStringToDecimal = (string: string): number => {
    const len = string.length;
    let bigEndianHexString = "0x";
    for (let i = 0; i < len / 2; i++) {
        bigEndianHexString += string.substring(len - (i + 1) * 2, len - i * 2);
    }
    return parseInt(bigEndianHexString);
};

export const bigEndianHexStringToDecimal = (hex: string): number => {
    const decimal = littleEndianHexStringToDecimal(hex);
    return ((decimal & 0xff) << 8) | ((decimal >> 8) & 0xff);
};

export const IntToFloat32 = (int: number): number => {
    if (int > 0 || int < 0) {
        const sign = int >>> 31 ? -1 : 1;
        let exp = ((int >>> 23) & 0xff) - 127;
        const mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
        let float32 = 0;
        for (const element of mantissa) {
            float32 += parseInt(element) ? Math.pow(2, exp) : 0;
            exp--;
        }
        return float32 * sign;
    }

    return 0;
};

export const hex2a = (hex: string): string => {
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

export const parsePacket = (packet: string, structure: Structure[]): string => {
    packet = packet.replace(/\s/g, "");
    let results = "";
    let index = 0;
    for (const struct of structure) {
        let size = 0;
        if (struct.unit === "byte") {
            size = 1;
        } else if (struct.unit === "short" || struct.unit === "opcode") {
            size = 2;
        } else if (struct.unit === "int" || struct.unit === "float") {
            size = 4;
        } else if (struct.unit === "long") {
            size = 8;
        } else if (struct.unit === "asciiStr") {
            size = 2;

            if (index + size * 2 > packet.length) {
                break;
            }

            const rawSize = packet.slice(index, index + size * 2);
            size += littleEndianHexStringToDecimal(rawSize) * 2;
        } else if (struct.unit === "mapleStr") {
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
        } else if (struct.unit === "coordsB") {
            size = 3;
        }

        if (index + size * 2 > packet.length) {
            break;
        }

        const rawPacket = packet.slice(index, index + size * 2);

        let value = "";
        if (struct.unit === "asciiStr" || struct.unit === "mapleStr") {
            value = hex2a(rawPacket.substring(4));
        } else if (struct.unit === "coordsF") {
            const x = IntToFloat32(littleEndianHexStringToDecimal(rawPacket.substring(0, 8)));
            const y = IntToFloat32(littleEndianHexStringToDecimal(rawPacket.substring(8, 16)));
            const z = IntToFloat32(littleEndianHexStringToDecimal(rawPacket.substring(16, 24)));
            value = `X:${x} Y:${y} Z:${z}`;
        } else if (struct.unit === "coordsS") {
            const x = bigEndianHexStringToDecimal(rawPacket.substring(0, 4));
            const y = bigEndianHexStringToDecimal(rawPacket.substring(4, 8));
            const z = bigEndianHexStringToDecimal(rawPacket.substring(8, 12));
            value = `X:${x} Y:${y} Z:${z}`;
        } else if (struct.unit === "coordsB") {
            const x = bigEndianHexStringToDecimal(rawPacket.substring(0, 2));
            const y = bigEndianHexStringToDecimal(rawPacket.substring(2, 4));
            const z = bigEndianHexStringToDecimal(rawPacket.substring(4, 6));
            value = `X:${x} Y:${y} Z:${z}`;
        } else if (struct.unit === "float") {
            value = IntToFloat32(littleEndianHexStringToDecimal(rawPacket)).toString();
        } else {
            const decimal = littleEndianHexStringToDecimal(rawPacket);
            value = `${decimal} (0x${decimal.toString(16).toUpperCase()})`;
        }

        results += `${addSpacesToPacket(rawPacket)} // ${struct.label}: ${value}\n`;
        index += size * 2;
    }

    if (index < packet.length) {
        results += `${addSpacesToPacket(packet.substring(index))} // rest of the packet`;
    }

    return results;
};
