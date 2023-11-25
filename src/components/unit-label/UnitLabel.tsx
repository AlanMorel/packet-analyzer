import tw from "@/src/utils/TailwindHelper";
import { ReactElement } from "react";

interface Props {
    unit: string;
}

const getColorFromUnit = (unit: string): string => {
    switch (unit) {
        case "opcode":
            return "bg-red-500";
        case "byte":
            return "bg-fuchsia-500";
        case "short":
            return "bg-purple-500";
        case "int":
            return "bg-green-500";
        case "float":
            return "bg-blue-500";
        case "long":
            return "bg-indigo-500";
        case "asciistr":
        case "maplestr":
            return "bg-yellow-500";
        case "coordsb":
        case "coordss":
        case "coordsf":
            return "bg-teal-500";
    }
    return "";
};

export default function UnitLabel(props: Props): ReactElement {
    const { unit } = props;

    const backgroundColor = getColorFromUnit(unit.toLowerCase());

    return (
        <div
            className={tw(
                "my-[0.15rem] mr-1 flex min-w-[3.25rem] items-center justify-center rounded px-1 text-xs text-white",
                backgroundColor
            )}
        >
            {unit}
        </div>
    );
}
