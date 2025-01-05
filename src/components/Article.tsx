import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import ArticleCard from "./ArticleCard";
import { client } from "@/sanity/lib/client";
// import client from "@/sanity/client";

export const revalidate = 10; //seconds

const Article = async () => {
  const query = `*[_type == "blog"]`;
  const articleData = await client.fetch(query);

  return (
    <div className="max-w-[1440px]  mx-auto !py-[80px] px-8 flex flex-col gap-[40px]">
      <div className="heading flex items-center justify-between">
        <h2 className="lg:text-5xl text-4xl font-semibold">Articles</h2>
        <PrimaryBtn text="More Articles" arrow={true} />
      </div>
      <div className="articleContainer w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center gap-[25px]">
        {articleData.map(
          (article: {
            title: string;
            image: any;
            slug: any;
            summary: string;
          }) => {
            return (
              <ArticleCard
                key={article.slug.current}
                title={article.title}
                summary={article.summary}
                image={article.image}
                slug={article.slug.current}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Article;
