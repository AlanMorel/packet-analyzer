import { useInputState } from "@/src/atoms/Input";
import { useStructureState } from "@/src/atoms/Structure";
import RightPanel from "@/src/components/right-panel/RightPanel";
import { parsePacket } from "@/src/utils/PacketUtils";
import { ReactElement, useMemo } from "react";

import Input from "@/src/components/input/Input";
import "@/src/components/packet-analyzer/PacketAnalyzer.scss";

const PacketAnalyzer = (): ReactElement => {
    const { input } = useInputState();
    const { structure } = useStructureState();

    const output = useMemo(() => {
        return input.split("\n").map((packet: string) => parsePacket(packet, structure));
    }, [input, structure]);

    return (
        <div className="packet-analyzer">
            <Input />
            <div className="packet-analyzer__output">
                <div className="packet-analyzer__outputs">
                    {output.map((packet: string, index: number) => (
                        <textarea disabled={true} wrap="off" value={packet} key={index} />
                    ))}
                </div>
                <RightPanel />
            </div>
        </div>
    );
};

export default PacketAnalyzer;
