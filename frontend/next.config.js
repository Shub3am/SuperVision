/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {remotePatterns: [{protocol: 'https',
    hostname: 'htm-4-images.s3.amazonaws.com',
    port: '',
    pathname: '/img/**'}]}

}

module.exports = nextConfig
