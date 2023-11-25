import { defaultPacket } from "@/src/utils/Defaults";
import { atom, useAtom } from "jotai";

const inputAtom = atom(defaultPacket);

interface IInput {
    input: string;
    setInput: (value: string) => void;
}

function useInputState(): IInput {
    const [input, setInput] = useAtom(inputAtom);

    return { input, setInput };
}

export default useInputState;
