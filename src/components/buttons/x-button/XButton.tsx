import "@/src/components/buttons/x-button/XButton.scss";

interface Props {
    onClick: () => void;
}

const XButton = (props: Props): JSX.Element => {
    const { onClick } = props;

    return (
        <span className="close-button" onClick={onClick}>
            &times;
        </span>
    );
};

export default XButton;
