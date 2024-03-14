/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'example-apis.vercel.app',
            port: '',
            pathname: '/assets/art/**',
          },
        ],
      },
};

export default nextConfig;
