import { useInputState } from "@/src/atoms/Input";
import { ReactElement } from "react";

import "@/src/components/input/Input.scss";

function Input(): ReactElement {
    const { input, setInput } = useInputState();

    return (
        <div className="packet-analyzer__input">
            <textarea
                placeholder="Enter packets, one on each line"
                value={input}
                wrap="off"
                onChange={(event): void => setInput(event.target.value)}
            />
        </div>
    );
}

export default Input;
