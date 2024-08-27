// src/app/creation/data.ts
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export type CreationType = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  text: any;
};

export async function getCreationData(slug: string): Promise<CreationType> {
  const mdxFilePath = path.join(process.cwd(), `_creation.posts/${slug}.mdx`);
  const mdxSource = fs.readFileSync(mdxFilePath, "utf-8");

  const serializedContent = await serialize(mdxSource, {
    parseFrontmatter: true,
  });

  const frontmatter = serializedContent.frontmatter || {};

  return {
    id: slug,
    title: (frontmatter.title as string) || "",
    date: (frontmatter.date as string) || "",
    thumbnail: (frontmatter.thumbnail as string) || "",
    text: serializedContent,
  };
}

export async function getAllCreations(): Promise<CreationType[]> {
  const creationsDir = path.join(process.cwd(), "_creation.posts");
  const filenames = fs.readdirSync(creationsDir);

  // 数字が大きい順にソート
  const sortedFilenames = filenames
    .map((filename) => filename.replace(/\.mdx$/, ""))
    .sort((a, b) => parseInt(b) - parseInt(a)); // 数字で比較

  const creations = await Promise.all(
    sortedFilenames.map(async (slug) => getCreationData(slug))
  );

  return creations;
}
