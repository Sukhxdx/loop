/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/picsumLoader.js",
    // Keep patterns for any absolute URLs / future default-loader use
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "i.picsum.photos" },
    ],
  },
};

export default nextConfig;
