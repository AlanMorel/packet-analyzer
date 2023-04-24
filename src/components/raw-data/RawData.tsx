"use client";

import { useModalState } from "@/src/atoms/Modal";
import { useStructureState } from "@/src/atoms/Structure";
import { useMemo } from "react";

const JSONModal = (): JSX.Element => {
    const { structure, updateStructure } = useStructureState();

    const stringified = useMemo(() => {
        return JSON.stringify(structure, null, 4);
    }, [structure]);

    return (
        <>
            <div className="mb-4 text-left text-lg font-bold text-[--contrast-black]">JSON Data</div>
            <textarea
                className="mb-1 mt-2 box-border h-[40rem] max-h-[80vh] w-full resize-y rounded  border  border-[--darken-contrast-05] bg-[--darken-contrast-05] px-2 py-1 font-mono text-xs text-[--contrast-black] outline-none"
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
        <div className="mb-1">
            <button
                className="mt-2 cursor-pointer rounded border-0 bg-[--darken-contrast-05] px-3 py-1 text-center text-xs text-[--contrast-black] transition hover:bg-[--darken-contrast-15]"
                onClick={onTriggerClick}
            >
                View and Modify JSON
            </button>
        </div>
    );
};

export default RawData;
