"use client";

import useInputState from "@/src/atoms/InputAtom";
import useStructureState from "@/src/atoms/StructureAtom";
import { parsePacket } from "@/src/utils/PacketUtils";
import { ReactElement, useMemo } from "react";

const Outputs = (): ReactElement => {
    const { input } = useInputState();
    const { structure } = useStructureState();

    const output = useMemo(() => {
        return input.split("\n").map((packet: string) => parsePacket(packet, structure));
    }, [input, structure]);

    return (
        <div className="mr-4 flex-1">
            {output.map((packet: string) => (
                <textarea
                    disabled={true}
                    wrap="off"
                    value={packet}
                    key={packet}
                    className="mb-4 box-border min-h-[20rem] w-full resize-y rounded border-0 bg-black/50 px-2 py-1 font-mono text-sm text-white outline-none"
                />
            ))}
        </div>
    );
};

export default Outputs;
