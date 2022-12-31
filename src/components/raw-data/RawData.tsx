import { useModalState } from "@/src/atoms/Modal";
import { useStructureState } from "@/src/atoms/Structure";
import { useMemo } from "react";

import "@/src/components/raw-data/RawData.scss";

const JSONModal = (): JSX.Element => {
    const { structure, updateStructure } = useStructureState();

    const stringified = useMemo(() => {
        return JSON.stringify(structure, null, 4);
    }, [structure]);

    return (
        <>
            <div className="modal__title">JSON Data</div>
            <textarea
                className="packet-analyzer__raw-data"
                value={stringified}
                onInput={(event): void => updateStructure(event)}
            />
        </>
    );
};

const RawData = (): JSX.Element => {
    const { openModal } = useModalState();

    const onTriggerClick = (): void => {
        openModal(<JSONModal />);
    };

    return (
        <div>
            <button className="packet-analyzer__raw-data-modal-trigger" onClick={onTriggerClick}>
                View and Modify JSON
            </button>
        </div>
    );
};

export default RawData;
