import React from "react";
import backImage from "@/public/top.jpg";
import { TopTitle } from "@/components/TopTitle";
import Scroll from "@/components/atoms/Scroll";
import Image from "next/image";

export const Top = () => {
  return (
    <div>
      <Image
        src={backImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <TopTitle />
      <Scroll />
    </div>
  );
};
