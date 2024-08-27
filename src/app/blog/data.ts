// data.ts
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

const blogDirectory = path.join(process.cwd(), "_blog.posts");

export type BlogPost = {
  id: string;
  title: string;
  date: string;
};

export const getBlogData = async (): Promise<BlogPost[]> => {
  const fileNames = fs.readdirSync(blogDirectory);

  const blogPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(blogDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { frontmatter } = await serialize(fileContent, {
        parseFrontmatter: true,
      });

      return {
        id: path.parse(fileName).name,
        title: (frontmatter.title as string) || "",
        date: (frontmatter.date as string) || "",
      };
    })
  );

  // ファイル名を数値に変換して降順にソート
  return blogPosts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
};
