import type { StorybookConfig } from "@storybook/nextjs";
const base = "/packet-analyzer/storybook/";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: true
            }
        },
        "@storybook/addon-actions"
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    docs: {
        autodocs: "tag"
    },
    webpackFinal: async config => {
        const updatedConfig = {
            output: {
                path: "./storybook",
                filename: base + "[name].[hash].bundle.js",
                publicPath: base
            },
            ...config
        };
        return updatedConfig;
    }
};

export default config;
