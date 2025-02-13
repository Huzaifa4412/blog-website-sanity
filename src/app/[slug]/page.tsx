import PortableTextComponent from "@/components/PortableTextComponent";
import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Params } from "next/dist/server/request/params";
import CommentSection from "@/components/Comment";

const page = async (props: { params: Promise<Params> }) => {
  const params = await props.params;
  const query = `*[_type == "blog" && slug.current == "${params.slug}"][0]`;
  const data = await client.fetch(query);
  return (
    <div className="max-w-[1440px] mx-auto !py-[80px] px-4 md:px-8">
      <Image
        src={urlFor(data.image).url()}
        className="w-full my-5 rounded-xl"
        alt={data.title}
        width={1000}
        height={1000}
      />
      <PortableTextComponent value={data.content} />
      <CommentSection postId={data._id} />
    </div>
  );
};

export const revalidate = 10;

export async function generateStaticParams() {
  const query = `*[_type=='blog']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);
  // console.log(slugRoutes)
  return slugRoutes.map((slug: string) => ({ slug }));
}

export default page;
