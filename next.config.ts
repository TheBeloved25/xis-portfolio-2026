import type { NextConfig } from "next";

// Static export: the site has no server features, so Cloudflare Pages can serve
// the plain HTML/CSS/JS output from `out/`.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
