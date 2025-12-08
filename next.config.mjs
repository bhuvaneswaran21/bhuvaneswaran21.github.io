const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // GitHub Pages + static export can't use Next's image optimizer
    unoptimized: true,
  },
  // Export as static HTML
  output: "export",
  // IMPORTANT:
  // Replace <your-repo-name> below with the actual repository name
  basePath: isProd ? "/bhuvaneswaran21.github.io" : "",
  assetPrefix: isProd ? "/bhuvaneswaran21.github.io/" : "",
};

export default nextConfig;



