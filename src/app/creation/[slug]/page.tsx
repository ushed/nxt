// src/app/creation/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import CreationContent from "./CreationContent";
export async function generateStaticParams() {
  const slugs = ["1", "2"];

  return slugs.map((slug) => ({
    slug,
  }));
}

type CreationType = {
  title: string;
  date: string;
  text: any;
  thumbnail: string;
};

const fetchCreationData = async (slug: string): Promise<CreationType> => {
  const mdxFilePath = path.join(process.cwd(), `_creation.posts/${slug}.mdx`);
  const mdxSource = fs.readFileSync(mdxFilePath, "utf-8");

  const serializedContent = await serialize(mdxSource, {
    parseFrontmatter: true,
  });

  const frontmatter = serializedContent.frontmatter || {};

  return {
    title: (frontmatter.title as string) || "",
    date: (frontmatter.date as string) || "",
    text: serializedContent,
    thumbnail: (frontmatter.thumbnail as string) || "",
  };
};

const CreationDetailPage = async ({ params }: { params: { slug: string } }) => {
  const creation = await fetchCreationData(params.slug);

  return (
    <main id="main">
      <CreationContent creation={creation} />
    </main>
  );
};

export default CreationDetailPage;
