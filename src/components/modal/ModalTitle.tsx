import { Title } from "@radix-ui/react-dialog";
import { ReactElement } from "react";

interface Props {
    children: ReactElement | string;
}

export default function ModalTitle(props: Props): ReactElement {
    const { children } = props;

    return <Title className="mb-6 text-2xl font-bold leading-6 text-slate-900">{children}</Title>;
}
