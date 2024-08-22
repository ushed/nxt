//src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, markdownToHtml, getAllPosts } from "@/lib/post";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <article className="mb-32">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <p>By {post.frontmatter.author.name}</p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </main>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.frontmatter.title} | Next.js Blog Example`;

  return {
    title,
    openGraph: {
      title,
      images: [post.frontmatter.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
