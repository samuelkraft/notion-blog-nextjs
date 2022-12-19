/**
 * @type {import('next').NextConfig}
 */


const nextConfig = {
    trailingSlash: true,
    images: {
        loader: "default",
        domains: ["localhost"],
    },
}

module.exports = nextConfig
