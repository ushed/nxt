import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
export async function generateStaticParams() {
  const slugs = ["1"];

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
