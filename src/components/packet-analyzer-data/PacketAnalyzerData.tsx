import { useStructureState } from "@/src/atoms/Structure";
import { ReactElement, useMemo } from "react";

import "@/src/components/packet-analyzer-data/PacketAnalyzerData.scss";

const RightPanel = (): ReactElement => {
    const { structure, updateStructure } = useStructureState();

    const stringified = useMemo(() => {
        return JSON.stringify(structure);
    }, [structure]);

    return (
        <div>
            <input
                type="text"
                className="packet-analyzer__json"
                value={stringified}
                onInput={(event): void => updateStructure(event)}
            />
        </div>
    );
};

export default RightPanel;
