// src/app/creation/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { getCreationData } from "../data";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const creation = await getCreationData(params.slug);

  return {
    title: `${creation.title} - 悠々記`,
    description: `詳細ページ :${creation.title}`,
  };
}

export async function generateStaticParams() {
  const creationDirectory = path.join(process.cwd(), "_creation.posts");
  const filenames = fs.readdirSync(creationDirectory);

  const slugs = filenames.map((filename) => path.parse(filename).name);

  return slugs.map((slug) => ({
    slug,
  }));
}

const CreationContent = dynamic(() => import("./CreationContent"), {
  ssr: false,
});

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
    console.error("Error fetching blog data:", error);
    throw new Error("Failed to fetch blog data");
  }
};

const CreationPage = async ({ params }: { params: { slug: string } }) => {
  const creation = await fetchCreationData(params.slug);

  return (
    <main id="main">
      <CreationContent slug={params.slug} creation={creation} />
    </main>
  );
};

export default CreationPage;
