import type { Config } from "jest";

const config: Config = {
    extensionsToTreatAsEsm: [".ts"],
    rootDir: process.cwd(),
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transformIgnorePatterns: [],
    testEnvironment: "jsdom",
    transform: {
        ".*\\.(tsx?|jsx?)$": [
            "@swc/jest",
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: "automatic"
                        }
                    }
                }
            }
        ]
    }
};

export default config;
