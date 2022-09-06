import { defaultPacket } from "@/src/utils/Defaults";
import { atom, SetterOrUpdater, useRecoilState } from "recoil";

const inputState = atom({
    key: "inputState",
    default: defaultPacket
});

interface IInput {
    input: string;
    setInput: SetterOrUpdater<string>;
}

export const useInputState = (): IInput => {
    const [input, setInput] = useRecoilState(inputState);

    return { input, setInput };
};
