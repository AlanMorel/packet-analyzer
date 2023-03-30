const { mergeConfig } = require("vite");
const path = require("path");
const base = "/packet-analyzer/storybook/";
module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    features: {
        storyStoreV7: true
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            base,
            resolve: {
                alias: {
                    "@": path.resolve(path.dirname(__dirname))
                }
            }
        });
    },
    managerHead: (head, { configType }) => {
        if (configType === "PRODUCTION") {
            return `
            ${head}
            <base href="${base}">
          `;
        }
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
    },
    docs: {
        autodocs: true
    }
};
