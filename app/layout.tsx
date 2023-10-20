import Body from "@/src/Body";
import "@/src/globals.css";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export default async function RootLayout(props: Props): Promise<ReactElement> {
    const { children } = props;

    return (
        <html lang="en" className={`${inter.variable}`}>
            <Body>{children}</Body>
        </html>
    );
}
