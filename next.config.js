const NextMdx = require('@next/mdx');

const withMDX = NextMdx({
  options: {},
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});

module.exports = nextConfig;
