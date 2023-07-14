import styled from "styled-components";
import { Header } from "@/components/Header";
import { Caption } from "@/components/Caption";
import { Element } from "react-scroll";
import { Contact } from "@/components/template/Contact";
import { Top } from "@/components/template/Top";
import { Skill } from "@/components/template/Skill";

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
  padding: 60px 100px;
`;

const HomePageWrapperGrey = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.sub};
  padding: 60px 100px;
`;

export default function Home() {
  return (
    <>
      <Element name="home">
        <HomePageWrapper>
          <Header />
          <Top />
        </HomePageWrapper>
      </Element>
      <Element name="about">
        <HomePageWrapperGrey>
          <Caption
            title="ABOUT"
            subTitle="introduce my profile"
            direction="left"
          />
        </HomePageWrapperGrey>
      </Element>
      <Element name="work">
        <HomePageWrapperBlack>
          <Caption
            title="WORK"
            subTitle="showcase of creations"
            direction="right"
          />
        </HomePageWrapperBlack>
      </Element>
      <Element name="skill">
        <HomePageWrapperGrey>
          <Skill />
        </HomePageWrapperGrey>
      </Element>
      <Element name="contact">
        <HomePageWrapperBlack>
          <Contact />
        </HomePageWrapperBlack>
      </Element>
    </>
  );
}
