"use client";

import { useInputState } from "@/src/atoms/Input";
import { ReactElement } from "react";

const Input = (): ReactElement => {
    const { input, setInput } = useInputState();

    return (
        <div className="mb-4">
            <textarea
                placeholder="Enter packets, one on each line"
                value={input}
                wrap="off"
                onChange={(event): void => setInput(event.target.value)}
                className="box-border min-h-[6rem] w-full resize-y rounded border-0 bg-[--light-component-background-color] px-2 py-1 font-mono text-sm text-[--contrast-black] outline-none"
            />
        </div>
    );
};

export default Input;
