import { useInputState } from "@/src/atoms/Input";
import { useStructureState } from "@/src/atoms/Structure";
import { parsePacket } from "@/src/utils/PacketUtils";
import { useMemo } from "react";

import "@/src/components/outputs/Outputs.scss";

const Outputs = (): JSX.Element => {
    const { input } = useInputState();
    const { structure } = useStructureState();

    const output = useMemo(() => {
        return input.split("\n").map((packet: string) => parsePacket(packet, structure));
    }, [input, structure]);

    return (
        <div className="packet-analyzer__outputs">
            {output.map((packet: string, index: number) => (
                <textarea disabled={true} wrap="off" value={packet} key={index} />
            ))}
        </div>
    );
};

export default Outputs;
