/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com'], 
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui-avatars.com',
                port: '',
                pathname: '/api/**'
            }
        ]
    }
}

module.exports = nextConfig
