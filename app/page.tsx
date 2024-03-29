import Main from "@/src/components/main/Main";
import { withMetadata } from "@/src/server/MetadataHelper";
import { ReactElement } from "react";

export default async function HomePage(): Promise<ReactElement> {
    return (
        <div className="m-auto max-w-[70rem] p-8 text-center font-text">
            <h1 className="mb-6 font-header text-6xl">Packet Analyzer</h1>
            <h2 className="mb-8 text-2xl">
                Use the packet analyzer to help you figure out and define the structures of packets
            </h2>
            <Main />
        </div>
    );
}

export const metadata = withMetadata({
    title: "Packet Analyzer",
    description: "Use the packet analyzer to help you figure out and define the structures of packets"
});
