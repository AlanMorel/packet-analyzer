import { Description } from "@radix-ui/react-dialog";
import { ReactElement } from "react";

interface Props {
    children: ReactElement | string | ReactElement[];
}

export default function ModalContent(props: Props): ReactElement {
    const { children } = props;

    return <Description className="mb-2 text-lg text-slate-600">{children}</Description>;
}
