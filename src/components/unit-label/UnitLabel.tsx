import "@/src/components/unit-label/UnitLabel.scss";

interface Props {
    unit: string;
}

const UnitLabel = (props: Props): JSX.Element => {
    const { unit } = props;

    return <div className={`packet-analyzer__unit packet-analyzer__unit--${unit.toLowerCase()}`}>{unit}</div>;
};

export default UnitLabel;
