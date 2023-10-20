import { ReactElement } from "react";

interface Props {
    label: string;
    onClick: () => void;
}

const StructureButton = (props: Props): ReactElement => {
    const { label, onClick } = props;

    return (
        <button
            className="m-1 cursor-pointer rounded border border-darken15 bg-transparent px-1 text-sm hover:bg-darken05 hover:text-black"
            onClick={onClick}
        >
            + {label}
        </button>
    );
};

export default StructureButton;
