"use client";

import useModal from "@/src/atoms/ModalAtom";
import useStructure from "@/src/atoms/StructureAtom";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import { ReactElement, useMemo } from "react";

const JSONModal = (): ReactElement => {
    const { structure, updateStructure } = useStructure();

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

export default function RawData(): ReactElement {
    const { openModal } = useModal();

    const onTriggerClick = (): void => {
        openModal(<JSONModal />);
    };

    return (
        <div className="mb-1 mt-2 flex items-center justify-between">
            <button
                className="cursor-pointer rounded border-0 bg-darken05 px-3 py-1 text-center text-sm transition hover:bg-darken15"
                onClick={onTriggerClick}
            >
                View and Modify JSON
            </button>
            <ThemeSwitcher />
        </div>
    );
}
