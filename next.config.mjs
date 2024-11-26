/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bemuseplayliststorage.blob.core.windows.net',
                port: '',
            }
        ]
    },
};

export default nextConfig;
