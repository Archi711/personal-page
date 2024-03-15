import createMDX from "@next/mdx";

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/personal-page",
  pageExtensions: ["tsx", "mdx"],
  output: "export",
};

export default withMDX(nextConfig);
