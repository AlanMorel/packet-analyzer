import { useStructureState } from "@/src/atoms/Structure";
import { ReactElement, useMemo } from "react";

import "@/src/components/raw-data/RawData.scss";

const RawData = (): ReactElement => {
    const { structure, updateStructure } = useStructureState();

    const stringified = useMemo(() => {
        return JSON.stringify(structure);
    }, [structure]);

    return (
        <div>
            <input
                type="text"
                className="packet-analyzer__raw-data"
                value={stringified}
                onInput={(event): void => updateStructure(event)}
            />
        </div>
    );
};

export default RawData;
