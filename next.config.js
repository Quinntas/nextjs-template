/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
    reactStrictMode: true,
    transpilePackages: ['ui'],
    typescript: {
        ignoreDuringBuilds: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['i.imgur.com'],
    },
    webpack: (config) => {
        config.externals.push('@node-rs/argon2', '@node-rs/bcrypt');
        return config;
    },
});
