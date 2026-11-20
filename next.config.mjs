import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "danpudsey.com" },
      { protocol: "https", hostname: "www.danpudsey.com" },
    ],
    unoptimized: true,
  },

  webpack(config, { isServer, dir, config: nextConfig }) {
    // Server components emit from .next/server (dev) or .next/server/chunks (build),
    // so point them back at .next, where the client assets and the static export live
    const distDir = path.join(dir, nextConfig.distDir);
    const outputPath = isServer
      ? path.relative(config.output.path, distDir) + "/"
      : "";

    config.module.rules.push({
      test: /\.(mp4|webm|pdf)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
        outputPath,
      },
    });


    // Grab the existing file loader that handles SVGs
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test instanceof RegExp && rule.test.test(".svg")
    );

    if (!fileLoaderRule) {
      throw new Error("Could not find the default file loader for SVGs");
    }

    // Apply the file loader only for SVGs imported with ?url
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] }, // exclude url imports
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: "removeViewBox", active: false },
                  { name: "removeDimensions", active: true },
                ],
              },
              titleProp: true,
            },
          },
        ],
      }
    );

    // Exclude SVGs from the default file loader
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
