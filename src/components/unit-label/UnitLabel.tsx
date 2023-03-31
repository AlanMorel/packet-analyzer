import "@/src/components/unit-label/UnitLabel.scss";

interface Props {
    unit: string;
}

const UnitLabel = (props: Props): JSX.Element => {
    const { unit } = props;

    return (
        <div
            className={`packet-analyzer__unit packet-analyzer__unit--${unit.toLowerCase()} mr-1 flex min-w-[3.25rem] items-center justify-center rounded px-1 text-xs font-bold`}
        >
            {unit}
        </div>
    );
};

export default UnitLabel;
