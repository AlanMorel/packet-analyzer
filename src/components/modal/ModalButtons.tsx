import { ReactElement } from "react";

interface Props {
    children: ReactElement | string | ReactElement[];
}

export default function ModalButtons(props: Props): ReactElement {
    const { children } = props;

    return <div className="mt-8 flex justify-end space-x-4">{children}</div>;
}
