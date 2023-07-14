import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { Header } from "@/components/Header";
import backImage from "../public/top.jpg";
import { TopTitle } from "@/components/TopTitle";
import Scroll from "@/components/Scroll";
import { Footer } from "@/components/Footer";
import { Caption } from "@/components/Caption";

const HomePageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.base};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fontFamily};
`;

const HomePageWrapperBlack = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.base};
  padding: 60px;
`;

const HomePageWrapperGrey = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.sub};
  padding: 60px;
`;

export default function Home() {
  return (
    <>
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
        <Scroll />
      </HomePageWrapper>
      <HomePageWrapperGrey>
        <Caption
          title="ABOUT"
          subTitle="introduce my profile"
          direction="left"
        />
      </HomePageWrapperGrey>
      <HomePageWrapperBlack>
        <Caption
          title="WORK"
          subTitle="showcase of creations"
          direction="right"
        />
      </HomePageWrapperBlack>
      <HomePageWrapperGrey>
        <Caption
          title="SKILL"
          subTitle="my technical proficmy technical proficiencyiency"
          direction="left"
        />
      </HomePageWrapperGrey>
      <HomePageWrapperBlack>
        <Caption
          title="CONTACT"
          subTitle="get in touch"
          direction="center"
        />
        <Footer />
      </HomePageWrapperBlack>
    </>
  );
}
