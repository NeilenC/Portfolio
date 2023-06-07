/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: `/_next/static/files/`,
            outputPath: `${options.isServer ? "../" : ""}static/files/`,
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
