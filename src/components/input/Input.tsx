"use client";

import useInput from "@/src/atoms/InputAtom";
import { ReactElement } from "react";

export default function Input(): ReactElement {
    const { input, setInput } = useInput();

    return (
        <div className="mb-4">
            <textarea
                placeholder="Enter packets, one on each line"
                value={input}
                wrap="off"
                onChange={(event): void => setInput(event.target.value)}
                className="box-border min-h-[6rem] w-full resize-y rounded border-0 bg-lighten95 px-2 py-1 font-mono text-sm outline-none"
            />
        </div>
    );
}
