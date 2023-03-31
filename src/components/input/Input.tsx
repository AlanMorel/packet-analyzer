import { useInputState } from "@/src/atoms/Input";

import "@/src/components/input/Input.scss";

const Input = (): JSX.Element => {
    const { input, setInput } = useInputState();

    return (
        <div className="packet-analyzer__input mb-4">
            <textarea
                placeholder="Enter packets, one on each line"
                value={input}
                wrap="off"
                onChange={(event): void => setInput(event.target.value)}
                className="min-h-[6rem] px-2 font-mono text-sm"
            />
        </div>
    );
};

export default Input;
