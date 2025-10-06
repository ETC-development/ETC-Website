import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    
    async rewrites() {
        return [
            {
                source: '/api/newsletter/subscribe',
                destination: 'https://listmonk-etc-news.onrender.com/api/public/subscription',
            }
        ];
    },
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
};

export default nextConfig;