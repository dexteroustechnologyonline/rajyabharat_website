/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "primecomputer.com.bd",
      },
      {
        protocol: "https",
        hostname: "//www.freepik.com",
      },
    ],
  },
};

export default nextConfig;

