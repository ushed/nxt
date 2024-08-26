import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
};

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
