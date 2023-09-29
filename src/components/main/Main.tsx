import Input from "@/src/components/input/Input";
import Outputs from "@/src/components/outputs/Outputs";
import RightPanel from "@/src/components/right-panel/RightPanel";
import { ReactElement } from "react";

const Main = (): ReactElement => {
    return (
        <div>
            <Input />
            <div className="flex">
                <Outputs />
                <RightPanel />
            </div>
        </div>
    );
};

export default Main;
