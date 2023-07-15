import styled from "styled-components";
import { Header } from "@/components/organisms/Header";
import { Element } from "react-scroll";
import { Contact } from "@/components/template/Contact";
import { Top } from "@/components/template/Top";
import { Skill } from "@/components/template/Skill";
import { About } from "@/components/template/About";
import { Work } from "@/components/template/Work";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomePageWrapperGrey = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.sub};
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
          <About />
        </HomePageWrapperGrey>
      </Element>
      <Element name="work">
        <HomePageWrapperBlack>
          <Work />
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
