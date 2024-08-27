// src/app/creation/[slug]/CreationContent.tsx
"use client";

import { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  { ssr: false }
);

type CreationType = {
  title: string;
  date: string;
  text: any;
  thumbnail: string;
};

type CreationContentProps = {
  slug: string;
  creation: CreationType;
};

const CreationContent: FC<CreationContentProps> = ({ slug, creation }) => {
  return (
    <section id="creation" className="wrapper">
      <h2>{creation.title}</h2>
      <h3>{creation.date}</h3>
      <img src={creation.thumbnail} alt={creation.title} />
      <MDXRemote {...creation.text} />
      <Link href="/creation" className="btn_a">
        <div className="btn" style={{ marginTop: "100px" }}>
          <div className="btn_txt">Creation</div>
        </div>
      </Link>
    </section>
  );
};

export default CreationContent;
