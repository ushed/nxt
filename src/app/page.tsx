import Link from "next/link";
import { getBlogData, BlogPost } from "./blog/data";

export default async function Home() {
  // ブログデータを取得し、最新の6件を抽出
  const blogPosts: BlogPost[] = await getBlogData();
  const recentPosts = blogPosts.slice(0, 6); // 上位6件を取得

  return (
    <main id="main">
      <picture>
        <img src="/favicon/kuma.jpg" alt="kumamoto" />
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
              <img src="/favicon/kuma.jpg" alt="kumamoto1" />
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
              <img src="/favicon/kuma.jpg" alt="kumamoto2" />
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
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <dt>{post.date}</dt>
              <dd>{post.title}</dd>
            </Link>
          ))}
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
