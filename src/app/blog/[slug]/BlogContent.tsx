// app/blog/[slug]/BlogContent.tsx
"use client";

import { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  { ssr: false }
);

type BlogType = {
  title: string;
  date: string;
  text: any;
};

type BlogContentProps = {
  slug: string;
  blog: BlogType;
};

const BlogContent: FC<BlogContentProps> = ({ slug, blog }) => {
  return (
    <section id="blog" className="wrapper">
      {/* <h1>{blog.title}</h1> */}
      <p>{blog.date}</p>
      <MDXRemote {...blog.text} />
      <Link href="/blog" className="btn_a">
        <div className="btn" style={{ marginTop: "100px" }}>
          <div className="btn_txt">blog</div>
        </div>
      </Link>
    </section>
  );
};

export default BlogContent;
