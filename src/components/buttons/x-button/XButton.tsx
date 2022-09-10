import { ReactElement } from "react";

import "@/src/components/buttons/x-button/XButton.scss";

interface Props {
    onClick: () => void;
}

const XButton = ({ onClick }: Props): ReactElement => {
    return (
        <span className="close-button" onClick={onClick}>
            &times;
        </span>
    );
};

export default XButton;
