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
                className="packet-analyzer__raw-data mb-1 mt-2 box-border h-[40rem] max-h-[80vh] w-full rounded-sm px-2 py-1 font-mono text-sm outline-none"
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
            <button
                className="packet-analyzer__raw-data-modal-trigger mt-2 cursor-pointer rounded border-0 px-3 py-1 text-center text-xs transition"
                onClick={onTriggerClick}
            >
                View and Modify JSON
            </button>
        </div>
    );
};

export default RawData;
