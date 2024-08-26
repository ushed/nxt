/** @type {import('next').NextConfig} */
const nextConfig = {
  // ページとして認識するファイルの拡張子を指定
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // プロジェクトを静的エクスポートする設定
  output: "export",
};

const withMDX = createMDX({
  // ここに必要なMarkdownプラグインを追加可能
});

// MDX設定とNext.js設定をマージしてエクスポート
export default withMDX(nextConfig);
