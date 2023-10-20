"use client";

import { useModalState } from "@/src/atoms/Modal";
import { useStructureState } from "@/src/atoms/Structure";
import { ReactElement, useMemo } from "react";

const JSONModal = (): ReactElement => {
    const { structure, updateStructure } = useStructureState();

    const stringified = useMemo(() => {
        return JSON.stringify(structure, null, 4);
    }, [structure]);

    return (
        <>
            <div className="mb-4 text-left text-lg font-bold">JSON Data</div>
            <textarea
                className="mb-1 mt-2 box-border h-[40rem] max-h-[80vh] w-full resize-y rounded  border  border-darken05 bg-darken05 px-2 py-1 font-mono text-xs outline-none"
                value={stringified}
                onInput={(event): void => updateStructure(event)}
            />
        </>
    );
};

const RawData = (): ReactElement => {
    const { openModal } = useModalState();

    const onTriggerClick = (): void => {
        openModal(<JSONModal />);
    };

    return (
        <div className="mb-1">
            <button
                className="mt-2 cursor-pointer rounded border-0 bg-darken05 px-3 py-1 text-center text-xs transition hover:bg-darken15"
                onClick={onTriggerClick}
            >
                View and Modify JSON
            </button>
        </div>
    );
};

export default RawData;
