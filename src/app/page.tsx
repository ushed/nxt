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
          <li>情報システム工学科 3年</li>
          <li>エンジニアを目指して勉強中です。</li>
        </ul>
        <p>
          流れで作ってみた個人ブログ的なウェブサイトですが、
          ここでは自分の創作や、日々の考え・経験などを記録していくつもりです。
          <br />「
          <a href="/creation">
            <span>Creation</span>
          </a>
          」 では自作の作品や制作物を紹介し、「
          <a href="/blog">
            <span>Blog</span>
          </a>
          」 では思ったことや感じたことを、気ままに綴っていきます。
          <br />
          このサイトを通じて、読んでくれた方が
          何か新しいことにチャレンジするきっかけになったら嬉しいです。
          自分のペースで、楽しみながらやっていきます！
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
