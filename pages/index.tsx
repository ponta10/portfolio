import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { Header } from "@/components/Header";
import backImage from "../public/top.jpg";
import { TopTitle } from "@/components/TopTitle";

const HomePageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.base};
  font-family: ${(props) => props.theme.fontFamily};
`;

export default function Home() {
  return (
    <HomePageWrapper>
      <Header />
      <Image
        src={backImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <TopTitle />
    </HomePageWrapper>
  );
}
