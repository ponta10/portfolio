import React from "react";
import backImage from "@/public/top.jpg";
import { TopTitle } from "@/components/TopTitle";
import Scroll from "@/components/atoms/Scroll";
import Image from "next/image";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%; // 必要に応じて変更
  height: 100vh; // 必要に応じて変更

  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Hero = () => {
  return (
    <BackgroundContainer>
      <Image
        src={backImage}
        alt="Background Image"
        className="backgroundImage"
        priority
      />
      <TopTitle />
      <Scroll />
    </BackgroundContainer>
  );
};
