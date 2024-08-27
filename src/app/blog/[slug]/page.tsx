// src/app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await fetchBlogData(params.slug);

  return {
    title: `${blog.title} - 悠々記`,
    description: `ブログ記事 : ${blog.title}`,
  };
}

export async function generateStaticParams() {
  const blogDirectory = path.join(process.cwd(), "_blog.posts");
  const filenames = fs.readdirSync(blogDirectory);

  const slugs = filenames.map((filename) => path.parse(filename).name);

  return slugs.map((slug) => ({
    slug,
  }));
}

const BlogContent = dynamic(() => import("./BlogContent"), { ssr: false });

type BlogType = {
  title: string;
  date: string;
  text: any;
};

const fetchBlogData = async (slug: string): Promise<BlogType> => {
  try {
    const mdxFilePath = path.join(process.cwd(), `_blog.posts/${slug}.mdx`);
    const mdxSource = fs.readFileSync(mdxFilePath, "utf-8");

    const serializedContent = await serialize(mdxSource, {
      parseFrontmatter: true,
    });

    const frontmatter = serializedContent.frontmatter || {};

    return {
      title: (frontmatter.title as string) || "",
      date: (frontmatter.date as string) || "",
      text: serializedContent,
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw new Error("Failed to fetch blog data");
  }
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlogData(params.slug);

  return (
    <main id="main">
      <BlogContent slug={params.slug} blog={blog} />
    </main>
  );
};

export default BlogPage;
