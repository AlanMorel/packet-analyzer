import { useInputState } from "@/src/atoms/Input";

const Input = (): JSX.Element => {
    const { input, setInput } = useInputState();

    return (
        <div className="packet-analyzer__input mb-4">
            <textarea
                placeholder="Enter packets, one on each line"
                value={input}
                wrap="off"
                onChange={(event): void => setInput(event.target.value)}
                className="min-h-[6rem] bg-[--light-component-background-color] px-2 font-mono text-sm text-[--text-color]"
            />
        </div>
    );
};

export default Input;
