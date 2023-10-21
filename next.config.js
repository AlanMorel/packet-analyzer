let baseConfigs = {
    basePath: "/packet-analyzer",
    reactStrictMode: true,
    swcMinify: true
};

const configs = phase => {
    if (phase !== "phase-development-server") {
        baseConfigs = {
            ...baseConfigs,
            output: "export",
            distDir: "dist"
        };
    }

    return baseConfigs;
};

export default configs;
