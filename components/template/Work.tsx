import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Caption } from "../atoms/Caption";
import { SlideLeft } from "../animations/SlideLeft";
import { FadeIn } from "../animations/FadeIn";
import { keyframes } from "styled-components";
import { breakpoints } from "@/utils/const";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const slideInFromRight = keyframes`
  0% {
    transform: translateX(60%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme?.colors.gray};
  box-shadow: 1px 1px 2px ${(props) => props.theme?.colors.gray};
  padding: 48px;
  width: 100%;
  background: linear-gradient(150deg, #222, #000);
  height: 65vh;
  gap: 40px;
  padding-left: 60px;
  position: relative;

  @media (max-width: ${breakpoints.sm}) {
    padding: 24px;
  }
`;

const WorksInnerContainer = styled.div<{
  $animationdirection: "left" | "right";
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  animation: ${(props) =>
      props.$animationdirection === "right"
        ? slideInFromRight
        : slideInFromLeft}
    0.6s forwards;

  @media (max-width: ${breakpoints.sm}) {
    gap: 0;
    align-items: center;
  }
`;

const WorkBoxContainer = styled.a`
  width: calc(34% - 40px);
  color: ${(props) => props.theme.colors.text};
  height: 42%;
  margin-bottom: 40px;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    opacity: 0.95;

    div {
      outline: solid ${(props) => props.theme.colors.accent} 3px;
    }
  }

  @media (max-width: ${breakpoints.xl}) {
    width: calc(50% - 40px);
    height: 38%;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: calc(50% - 40px);
    height: 38%;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    height: 40%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    height: 30%;
  }
`;

const WorkBox = styled.div<{ $bgimage: string }>`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.text};
  background-image: url(${(props) => props.$bgimage});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  margin-top: -20px;
`;

const WorkTitle = styled.span`
  text-align: center;
  display: block;
`;

const ArrowButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
    opacity: 0.9;
  }
`;

const PrevButton = styled(ArrowButton)`
  &::before {
    content: "";
    border-style: solid;
    border-width: 7px 10px 7px 0;
    border-color: transparent ${(props) => props.theme.colors.accent}
      transparent transparent;
    display: inline-block;
  }
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const NextButton = styled(ArrowButton)`
  &::before {
    content: "";
    border-style: solid;
    border-width: 7px 0 7px 10px;
    border-color: transparent transparent transparent
      ${(props) => props.theme.colors.accent};
    display: inline-block;
  }
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.span<{ $active?: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.accent : props.theme.colors.gray};
  border-radius: 50%;
  margin: 0 6px;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

export const Work = () => {
  const [$animationdirection, set$animationdirection] = useState<
    "left" | "right"
  >("left");
  const works: Project[] = [
    {
      id: 1,
      title: "DishFinder",
      image: "/dishFinder.png",
      link: "https://www.dish-finder.com/",
    },
    {
      id: 2,
      title: "GitHubGrow",
      image: "/githubGrow.png",
      link: "https://github-glow.vercel.app/",
    },
    {
      id: 3,
      title: "Netflixクローン",
      image: "/netflix2.png",
      link: "https://netflix-clone-six-pied.vercel.app/",
    },
    {
      id: 4,
      title: "ぽんぽんプログラミング",
      image: "/ponpon.png",
      link: "https://pontaro.net/",
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [worksPerPage, setWorksPerPage] = useState<number>(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(breakpoints.sm)) {
        setWorksPerPage(2);
      } else {
        setWorksPerPage(6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(works.length / worksPerPage);

  const getCurrentWorks = (): Project[] => {
    const start = currentPage * worksPerPage;
    const end = start + worksPerPage;
    return works.slice(start, end);
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
      set$animationdirection("right");
    }
  };

  const handlePrevPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
      set$animationdirection("left");
    }
  };

  return (
    <Container>
      <SlideLeft>
        <Caption
          title="WORK"
          subTitle="showcase of creations"
          direction="left"
        />
      </SlideLeft>
      <FadeIn>
        <WorkContainer>
          <WorksInnerContainer
            $animationdirection={$animationdirection}
            key={currentPage}
          >
            {getCurrentWorks()?.map((work) => (
              <WorkBoxContainer
                key={work?.id}
                href={work?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WorkBox $bgimage={work?.image} />
                <WorkTitle>{work?.title}</WorkTitle>
              </WorkBoxContainer>
            ))}
          </WorksInnerContainer>
          <PrevButton
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          ></PrevButton>
          <NextButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          ></NextButton>
        </WorkContainer>
        <PaginationContainer>
          {totalPages > 1 &&
            Array.from({ length: totalPages }).map((_, index) => (
              <Dot
                key={index}
                $active={index === currentPage}
                onClick={() => setCurrentPage(index)}
              />
            ))}
        </PaginationContainer>
      </FadeIn>
    </Container>
  );
};
