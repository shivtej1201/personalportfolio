/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    domains: ["assets.aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/products/thumbnails/new/**",
      },
    ],
  },
};

export default nextConfig;
