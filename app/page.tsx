import Main from "@/src/components/main/Main";
import { withMetadata } from "@/src/server/MetadataHelper";

export default async function HomePage(): Promise<JSX.Element> {
    return (
        <div className="app m-auto max-w-[70rem] p-8 text-center font-text">
            <h1 className="mb-6 font-header text-6xl text-[--contrast-black]">Packet Analyzer</h1>
            <h2 className="mb-8 text-2xl text-[--contrast-black]">
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
