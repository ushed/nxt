import mdx from "@next/mdx";
const { createMDX } = mdx;

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
