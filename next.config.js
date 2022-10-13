/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.iconsdb.com", "rentmcpherson.com"],
  },
};

module.exports = nextConfig;
