/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio.github.io" : "",
  assetPrefix: isProd ? "/portfolio.github.io/" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
