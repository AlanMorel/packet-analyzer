import { defaultPacket } from "@/src/utils/Defaults";
import { atom, useRecoilState } from "recoil";

const inputState = atom({
    key: "inputState",
    default: defaultPacket
});

export const useInputState = () => {
    const [input, setInput] = useRecoilState(inputState);

    return { input, setInput };
};
