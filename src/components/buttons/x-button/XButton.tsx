interface Props {
    onClick: () => void;
    className?: string;
}

const XButton = (props: Props): JSX.Element => {
    const { onClick, className } = props;

    return (
        <span
            className={`duration-250 ease z-1 absolute w-6 cursor-pointer rounded-sm text-center font-bold leading-6 transition-all ${className}`}
            onClick={onClick}
        >
            &times;
        </span>
    );
};

export default XButton;
