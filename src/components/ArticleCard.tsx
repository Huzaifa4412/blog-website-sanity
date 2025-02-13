import React from "react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const ArticleCard = ({
  title,
  image,
  slug,
  summary,
}: {
  title: string;
  image: any;
  summary: string;
  slug: any;
}) => {
  return (
    <div className="articleCard w-[320px] lg:h-[550px] flex flex-col gap-[30px] justify-between flex-shrink-0">
      <div className="image w-full h-[325px] ">
        <Image
          src={urlFor(image.asset._ref).url()}
          className="w-full h-[325px] rounded-md object-cover object-center hover:scale-105 duration-200
          "
          alt="Product"
          width={357}
          height={325}
        />
      </div>
      <div className="text flex flex-col !justify-between">
        <div className="content">
          <h3 className="text-[22px] font-bold">{title}</h3>
          <p className="text-[16px] my-2 font-medium">
            {summary.slice(0, 100) + "..."}{" "}
          </p>
        </div>
        <Link href={`/${slug}`}>
          <div className="w-max">
            <PrimaryBtn text="Read More" arrow={true} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
