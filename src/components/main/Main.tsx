import Input from "@/src/components/input/Input";
import Outputs from "@/src/components/outputs/Outputs";
import RightPanel from "@/src/components/right-panel/RightPanel";

import "@/src/components/main/Main.scss";

const Main = (): JSX.Element => {
    return (
        <div className="packet-analyzer">
            <Input />
            <div className="packet-analyzer__main flex">
                <Outputs />
                <RightPanel />
            </div>
        </div>
    );
};

export default Main;
