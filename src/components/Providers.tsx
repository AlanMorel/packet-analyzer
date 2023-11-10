"use client";

import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Providers(props: Props): ReactElement {
    const { children } = props;

    return (
        <ThemeProvider enableColorScheme={false} defaultTheme="light">
            <div className="min-h-screen bg-light-background bg-left-bottom bg-repeat-x dark:bg-dark-background">
                {children}
            </div>
        </ThemeProvider>
    );
}
