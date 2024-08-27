// src/app/creation/[slug]/CreationContent.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MDXRemote } from "next-mdx-remote";

type CreationType = {
  title: string;
  date: string;
  text: any;
  thumbnail: string;
};

type CreationContentProps = {
  creation: CreationType;
};

const CreationContent: FC<CreationContentProps> = ({ creation }) => {
  const components = {
    img: (props: React.ComponentProps<typeof Image>) => (
      <Image {...props} layout="responsive" alt={props.alt || "Image"} />
    ),
    Image: (props: React.ComponentProps<typeof Image>) => (
      <Image {...props} layout="responsive" alt={props.alt || "Image"} />
    ),
  };

  return (
    <section id="creation" className="wrapper">
      <h1>{creation.title}</h1>
      <p>{creation.date}</p>
      <Image
        src={creation.thumbnail}
        alt={creation.title}
        width={500}
        height={500}
      />
      <MDXRemote {...creation.text} components={components} />
      <Link href="/creation" className="btn_a">
        <div className="btn" style={{ marginTop: "100px" }}>
          <div className="btn_txt">Creation</div>
        </div>
      </Link>
    </section>
  );
};

export default CreationContent;
