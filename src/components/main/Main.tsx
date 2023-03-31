import Input from "@/src/components/input/Input";
import Outputs from "@/src/components/outputs/Outputs";
import RightPanel from "@/src/components/right-panel/RightPanel";

const Main = (): JSX.Element => {
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
