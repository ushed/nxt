import Link from "next/link";
import { getAllCreations, CreationType } from "./creation/data";
import { getBlogData, BlogPost } from "./blog/data";

export default async function Home() {
  // 作成物データを取得し、最新の6件を抽出
  const creationPosts: CreationType[] = await getAllCreations();
  const recentCreations = creationPosts.slice(0, 6); // 上位6件を取得

  // ブログデータを取得し、最新の6件を抽出
  const blogPosts: BlogPost[] = await getBlogData();
  const recentPosts = blogPosts.slice(0, 6); // 上位6件を取得

  return (
    <main id="main">
      <div className="top_pic">
        <picture>
          <img src="/favicon/kuma.jpg" alt="kumamoto" />
        </picture>
      </div>

      {/* about */}
      <section id="about" className="wrapper">
        <h2 className="sec-title">
          About <span>me</span>
        </h2>
        <ul>
          <li>
            <span>3</span>6(さぶろう)
          </li>
          <li>大学2年生</li>
          <li>エンジニアを目指してます</li>
        </ul>
        <p>
          基本的に月1回、何か新しいコンテンツをアップする予定です。
          <br />「
          <a href="/creation">
            <span>Creation</span>
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
          {recentCreations.map((post) => (
            <li key={post.id}>
              <Link href={`/creation/${post.id}`}>
                <img src={post.thumbnail} alt={post.title} />
                <div>
                  <h3>{post.date}</h3>
                  <p>{post.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/creation" className="btn_a">
          <div className="btn" style={{ marginTop: "100px" }}>
            <div className="btn_txt">more Creation</div>
          </div>
        </Link>
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
        <Link href="/blog" className="btn_a">
          <div className="btn" style={{ marginTop: "100px" }}>
            <div className="btn_txt">more Blog</div>
          </div>
        </Link>
      </section>
    </main>
  );
}
