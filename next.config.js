let nextConfig = {
    basePath: "/packet-analyzer",
    reactStrictMode: true,
    swcMinify: true
};

const configs = phase => {
    if (phase !== "phase-development-server") {
        nextConfig = {
            ...nextConfig,
            output: "export",
            distDir: "dist"
        };
    }

    return nextConfig;
};

export default configs;
