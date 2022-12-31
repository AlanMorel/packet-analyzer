import "@/src/components/structure-button/StructureButton.scss";

interface Props {
    label: string;
    onClick: () => void;
}

const StructureButton = (props: Props): JSX.Element => {
    const { label, onClick } = props;

    return (
        <button className="structure-button" onClick={onClick}>
            + {label}
        </button>
    );
};

export default StructureButton;
