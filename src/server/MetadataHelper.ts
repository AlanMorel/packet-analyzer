import Config from "@/src/Config";
import { Metadata, Viewport } from "next/types";

export const viewport: Viewport = {
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
    minimumScale: 1
};

export type BaseMetadata = {
    title: string;
    description: string;
    image?: string;
};

export type MetadataProps = {
    params: any;
    searchParams: any;
};

export const withMetadata = (baseMetadata: BaseMetadata): Metadata => {
    return buildMetadata(baseMetadata);
};

const favicon = `${Config.app.subpath}/favicons/favicon.ico`;
const image = `${Config.app.subpath}/images/meta-image.png`;

const buildMetadata = (base: BaseMetadata): Metadata => {
    return {
        metadataBase: new URL(`https://${Config.app.domain}`),
        title: base.title,
        description: base.description,
        applicationName: Config.app.name,
        openGraph: {
            title: base.title,
            description: base.description,
            url: `https://${Config.app.domain}`,
            siteName: Config.app.name,
            images: [
                {
                    url: base.image ?? image,
                    width: 1280,
                    height: 800
                }
            ],
            locale: "en-US",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: base.title,
            description: base.description,
            creator: undefined,
            images: {
                url: base.image ?? image,
                alt: `${Config.app.name} Logo`
            }
        },
        icons: {
            icon: favicon,
            shortcut: favicon,
            apple: [
                {
                    url: "/favicons/apple-touch-icon-57x57.png",
                    sizes: "57x57",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-60x60.png",
                    sizes: "60x60",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-76x76.png",
                    sizes: "76x76",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-114x114.png",
                    sizes: "114x114",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-120x120.png",
                    sizes: "120x120",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-152x152.png",
                    sizes: "152x152",
                    type: "image/png"
                }
            ],
            other: {
                rel: "apple-touch-icon-precomposed",
                url: "/favicons/apple-touch-icon-152x152.png"
            }
        }
    };
};
