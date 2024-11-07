import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
