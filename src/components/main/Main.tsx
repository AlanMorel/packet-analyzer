import Input from "@/src/components/input/Input";
import Outputs from "@/src/components/outputs/Outputs";
import RightPanel from "@/src/components/right-panel/RightPanel";
import { ReactElement } from "react";

import "@/src/components/main/Main.scss";

const Main = (): ReactElement => {
    return (
        <div className="packet-analyzer">
            <Input />
            <div className="packet-analyzer__main">
                <Outputs />
                <RightPanel />
            </div>
        </div>
    );
};

export default Main;
