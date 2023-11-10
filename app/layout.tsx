import Providers from "@/src/components/Providers";
import Modal from "@/src/components/modal/Modal";
import "@/src/globals.css";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export { viewport } from "@/src/server/MetadataHelper";

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
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="m-0 font-sans text-black">
                <Providers>{children}</Providers>
                <Toaster position="bottom-center" />
                <Modal />
            </body>
        </html>
    );
}
