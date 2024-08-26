// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main id="main">
      <picture>
        <Image
          src="/public/favicon/kuma.jpg"
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
          基本的に月1で何かをアップする予定しています。
          <br />「
          <a href="/creation">
            <span>creation</span>
          </a>
          」 では創作物を紹介し、「
          <a href="/blog">
            <span>Blog</span>
          </a>
          」 では新しいことに挑戦するためのモチベーションを維持するため
          の記録を綴っていきます。
          <br />
          このサイトを通じて、皆さんも新しいチャレンジを始めるきっかけになれば嬉しいです。
          自分のペースで、楽しんで取り組んでみてください!!
        </p>
      </section>

      <section id="creation" className="wrapper">
        <h2 className="sec-title">
          Crea<span>tions</span>
        </h2>
        <ul>
          <li>
            <a href="/creationDetail/1">
              <Image
                src="/favicon/kuma.jpg"
                alt="kumamoto1"
                width={300}
                height={300}
              />
              <div>
                <h3>2004/04/04</h3>
                <p>
                  あああああああああああああああああああああああああああああああああああああ
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="/creationDetail/1">
              <Image
                src="/favicon/kuma.jpg"
                alt="kumamoto2"
                width={300}
                height={300}
              />
              <div>
                <h3>2004/04/04</h3>
                <p>
                  あああああああああああああああああああああああああああああああああああああ
                </p>
              </div>
            </a>
          </li>
        </ul>
        <a href="/creation" className="btn_a">
          <div className="btn">
            <div className="btn_txt">more creation</div>
          </div>
        </a>
      </section>

      <section id="blog" className="wrapper">
        <h2 className="sec-title">
          Bl<span>og</span>
        </h2>
        <dl>
          <a href="/blogDetail/3">
            <dt>2024/08/21</dt>
            <dd>振り出しに戻ってからの〜</dd>
          </a>
          <a href="/blogDetail/2">
            <dt>2024/08/12</dt>
            <dd>個人サイト無理ゲー</dd>
          </a>
          <a href="/blogDetail/1">
            <dt>2024/07/20</dt>
            <dd>何となくやっていく</dd>
          </a>
        </dl>
        <a href="/blog" className="btn_a">
          <div className="btn">
            <div className="btn_txt">more blog</div>
          </div>
        </a>
      </section>
    </main>
  );
}
