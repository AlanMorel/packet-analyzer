import { defaultPacket } from "@/src/utils/Defaults";
import { atom, useAtom } from "jotai";

const inputAtom = atom(defaultPacket);

interface IInput {
    input: string;
    setInput: (value: string) => void;
}

export default function useInput(): IInput {
    const [input, setInput] = useAtom(inputAtom);

    return { input, setInput };
}
