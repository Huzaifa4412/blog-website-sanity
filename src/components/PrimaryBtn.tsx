import React from "react";
import Image from "next/image";

const PrimaryBtn = ({ text, arrow }: { text: string; arrow: boolean }) => {
  return (
    <button className="border-b border-b-black flex items-center hover:gap-5 duration-300 justify-center gap-2 font-semibold">
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
