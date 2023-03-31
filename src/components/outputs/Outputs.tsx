import { useInputState } from "@/src/atoms/Input";
import { useStructureState } from "@/src/atoms/Structure";
import { parsePacket } from "@/src/utils/PacketUtils";
import { useMemo } from "react";

const Outputs = (): JSX.Element => {
    const { input } = useInputState();
    const { structure } = useStructureState();

    const output = useMemo(() => {
        return input.split("\n").map((packet: string) => parsePacket(packet, structure));
    }, [input, structure]);

    return (
        <div className="mr-4 flex-1">
            {output.map((packet: string, index: number) => (
                <textarea
                    disabled={true}
                    wrap="off"
                    value={packet}
                    key={index}
                    className="mb-4 min-h-[20rem] border-0 bg-black bg-opacity-50 px-2 py-1 font-mono text-sm text-white"
                />
            ))}
        </div>
    );
};

export default Outputs;
