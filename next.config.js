
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/newsletter/subscribe',
            destination: 'https://listmonk-etc-news.onrender.com/api/public/subscription',
            
          }
        ]
      }
}


module.exports = nextConfig
