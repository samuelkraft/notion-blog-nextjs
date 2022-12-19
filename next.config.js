/**
 * @type {import('next').NextConfig}
 */


const nextConfig = {
    trailingSlash: true,
    images: {
        loader: "default",
        domains: ['www.notion.so'],
    },
}

module.exports = nextConfig
