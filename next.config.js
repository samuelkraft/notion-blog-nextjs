/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
    trailingSlash: true,
    images: {
        loader: "default",
        domains: ['www.notion.so', "images.unsplash.com"],
    },
    i18n,
}

module.exports = nextConfig
