/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "danpudsey.com" },
      { protocol: "https", hostname: "www.danpudsey.com" },
    ],
    unoptimized: true,
  },

  webpack(config) {
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
