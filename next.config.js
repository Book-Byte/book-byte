/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: 'imgix', // or other loaders if preferred
    // path: 'https://example.com/_next/image',
    domains: ['images-na.ssl-images-amazon.com', 'i.scdn.co', "i.gr-assets.com"],
    // New 'remotePatterns' to specify allowed remote patterns
    // remotePatterns: ['https:/images-na.ssl-images-amazon.com/*', 'https://i.scdn.co/*', "https://i.gr-assets.com/*"],
    },
}

module.exports = nextConfig
