/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images: {
        unoptimized: true,
        domains: ['pay-standards-v2.s3.amazonaws.com', 'ds62om5y7mni7.cloudfront.net'],
    },
    trailingSlash: true,
};

export default nextConfig;
