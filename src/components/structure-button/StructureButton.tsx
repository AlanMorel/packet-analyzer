import "@/src/components/structure-button/StructureButton.scss";

interface Props {
    label: string;
    onClick: () => void;
}

const StructureButton = (props: Props): JSX.Element => {
    const { label, onClick } = props;

    return (
        <button className="structure-button m-1 cursor-pointer rounded bg-transparent px-1 text-sm" onClick={onClick}>
            + {label}
        </button>
    );
};

export default StructureButton;
