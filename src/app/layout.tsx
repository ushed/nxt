//src/app/layout.tsx
import type { Metadata } from "next";
import { Hina_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/app/_component/header/header";
import Footer from "@/app/_component/footer/footer";

const inter = Hina_Mincho({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "悠々記",
  description: "36の日記です。月1で何かをアップしていきます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
        <link rel="icon" href="/favicon/36icon.png" />
        {/* OGP タグの設定 */}
        <meta property="og:title" content="悠々記" />
        <meta property="og:description" content="36の日記です。" />
        <meta property="og:image" content="/favicon/kuma.jng" />
        <meta property="og:url" content="https://nxt-11k.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
