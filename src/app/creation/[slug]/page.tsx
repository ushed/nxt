import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import CreationContent from "./CreationContent";

export async function generateStaticParams() {
  // `_creation.posts` フォルダ内のファイル名を動的に取得することをお勧めします
  const slugs = ["1", "2"]; // 例: 動的に取得するコードに変更

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
  try {
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
  } catch (error) {
    console.error("Error fetching creation data:", error);
    throw new Error("Failed to fetch creation data");
  }
};

const CreationDetailPage = async ({ params }: { params: { slug: string } }) => {
  try {
    const creation = await fetchCreationData(params.slug);

    return (
      <main id="main">
        <CreationContent creation={creation} />
      </main>
    );
  } catch (error) {
    console.error("Error rendering CreationDetailPage:", error);
    return (
      <main id="main">
        <p>Failed to load creation data. Please try again later.</p>
      </main>
    );
  }
};

export default CreationDetailPage;
