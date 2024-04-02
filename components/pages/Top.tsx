import styled from "styled-components";
import { Header } from "@/components/organisms/Header";
import { Element } from "react-scroll";
import { Contact } from "@/components/template/Contact";
import { Hero } from "@/components/template/Hero";
import { Skill } from "@/components/template/Skill";
import { About } from "@/components/template/About";
import { Work } from "@/components/template/Work";
import { Career } from "@/components/template/Career";
import LoadingScreen from "@/components/atoms/LoadingScreen";
import { breakpoints } from "@/utils/const";

interface Section {
  name: string;
  component: React.ReactNode;
}

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
  height: auto;

  @media (max-width: ${breakpoints.sm}) {
    padding: 40px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 30px;
  }
`;

const HomePageWrapperGrey = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.sub};
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.md}) {
    padding: 40px;
    height: auto;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 30px;
  }
`;

export default function Top() {
  const sections: Section[] = [
    { name: "about", component: <About /> },
    { name: "career", component: <Career /> },
    { name: "work", component: <Work /> },
    { name: "skill", component: <Skill /> },
    { name: "contact", component: <Contact /> },
  ];
  return (
    <>
      <Element name="top">
        <HomePageWrapper>
          <Header />
          <Hero />
        </HomePageWrapper>
      </Element>
      {sections.map((section, index) => {
        const WrapperComponent =
          index % 2 === 0 ? HomePageWrapperGrey : HomePageWrapperBlack;
        return (
          <Element key={section.name} name={section.name}>
            <WrapperComponent>{section.component}</WrapperComponent>
          </Element>
        );
      })}
      <LoadingScreen />
    </>
  );
}
