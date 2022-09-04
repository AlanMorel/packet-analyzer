import { useInputState } from "@/src/atoms/Input";

import "@/src/components/input/Input.scss";

function Input() {
    const { input, setInput } = useInputState();

    return (
        <div className="packet-analyzer__input">
            <textarea
                placeholder="Enter packets, one on each line"
                value={input}
                wrap="off"
                onChange={event => setInput(event.target.value)}
            />
        </div>
    );
}

export default Input;
