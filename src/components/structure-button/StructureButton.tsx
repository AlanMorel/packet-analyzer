import { ReactElement } from "react";

interface Props {
    label: string;
    onClick: () => void;
}

const StructureButton = (props: Props): ReactElement => {
    const { label, onClick } = props;

    return (
        <button
            className="m-1 cursor-pointer rounded border border-[--light-border-color] bg-transparent px-1 text-sm text-[--contrast-black] hover:bg-[--darken-contrast-05] hover:text-[--contrast-black]"
            onClick={onClick}
        >
            + {label}
        </button>
    );
};

export default StructureButton;
