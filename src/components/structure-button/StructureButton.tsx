import { ReactElement } from "react";

import "@/src/components/structure-button/StructureButton.scss";

interface Props {
    label: string;
    onClick: () => void;
}

const StructureButton = ({ label, onClick }: Props): ReactElement => {
    return (
        <button className="structure-button" onClick={onClick}>
            + {label}
        </button>
    );
};

export default StructureButton;
