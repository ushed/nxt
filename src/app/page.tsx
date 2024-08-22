// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main id="main">
      <picture>
        <Image
          src="/favicon/kuma.jpg"
          alt="kumamoto"
          width={500}
          height={500}
        />
      </picture>

      {/* about */}
      <section id="about" className="wrapper">
        <h2 className="sec-title">
          About <span>me</span>
        </h2>
        <ul>
          <li>
            <span>U</span>shed
          </li>
          <li>大学2年生</li>
          <li>エンジニアを目指してます</li>
        </ul>
        <p>
          基本月１更新になると思います
          <br />
          <Link href="/creation">
            <span>Creations</span>
          </Link>
          では創作物、
          <Link href="/blog">
            <span>Blog</span>
          </Link>
          では何かの動機になれば感覚で書いていくつもりです
          <br />
          これらを見ていて、皆さんの中にもチャレンジしてみたいことができたら、ぜひ自分のペースでやってみてください！！
        </p>
      </section>
    </main>
  );
}
