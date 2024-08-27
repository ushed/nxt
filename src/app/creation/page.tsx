// src/app/creation/page.tsx
import { FC } from "react";
import Link from "next/link";
import { getAllCreations, CreationType } from "./data";

const CreationPage: FC = async () => {
  const creationPosts: CreationType[] = await getAllCreations();

  return (
    <main id="main">
      <section id="creation" className="wrapper">
        <h2 className="sec-title">
          Crea<span>tion</span>
        </h2>
        <ul>
          {creationPosts.map((post) => (
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
      </section>
    </main>
  );
};

export default CreationPage;
