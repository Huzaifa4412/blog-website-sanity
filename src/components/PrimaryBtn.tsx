"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PrimaryBtn = ({
  text,
  arrow,
  route,
}: {
  text: string;
  arrow: boolean;
  route?: string;
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => route && router.push(route)}
      className="border-b border-b-black flex items-center hover:gap-5 duration-300 justify-center gap-2 font-semibold"
    >
      {text}{" "}
      {arrow && (
        <Image
          src={"/images/right-sign.svg"}
          alt="Arrow"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default PrimaryBtn;
