import { ReactElement } from "react";

import "@/src/components/unit-label/UnitLabel.scss";

interface Props {
    unit: string;
}

const UnitLabel = ({ unit }: Props): ReactElement => {
    return <div className={`packet-analyzer__unit packet-analyzer__unit--${unit.toLowerCase()}`}>{unit}</div>;
};

export default UnitLabel;
