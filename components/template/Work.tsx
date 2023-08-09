import React, { useState } from "react";
import { styled } from "styled-components";
import { Caption } from "../atoms/Caption";
import { SlideLeft } from "../animations/SlideLeft";
import { FadeIn } from "../animations/FadeIn";
import { keyframes } from "styled-components";

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
`;

const WorkContainer = styled.div`
  display: flex;
  // align-items: center;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme?.colors.gray};
  box-shadow: 1px 1px 2px ${(props) => props.theme?.colors.gray};
  padding: 48px;
  width: 100%;
  background: linear-gradient(150deg, #222, #000);
  height: 65vh;
  // overflow-y: scroll;
  gap: 40px;
  padding-left: 60px;
  position: relative;
`;

const WorksInnerContainer = styled.div<{
  animationDirection: "left" | "right";
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  animation: ${(props) =>
      props.animationDirection === "right" ? slideInFromRight : slideInFromLeft}
    0.6s forwards;
`;

const WorkBoxContainer = styled.a`
  width: calc(34% - 40px);
  color: ${(props) => props.theme.colors.text}; // 文字色を白に設定
  height: 42%;
  margin-bottom: 40px;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    opacity: 0.95;

    div {
      outline: solid ${(props) => props.theme.colors.accent} 3px;
    }
  }
`;

const WorkBox = styled.div<{ bgImage: string }>`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.text};
  background-image: url(${(props) => props.bgImage}); // この行を追加
  background-size: cover; // 背景画像を要素に合わせてサイズ調整
  background-position: center; // 背景画像の位置を中央に設定
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

const Dot = styled.span<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.accent : props.theme.colors.gray};
  border-radius: 50%;
  margin: 0 6px;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

export const Work = () => {
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");
  const works: Project[] = [
    {
      id: 1,
      title: "Netflixクローン",
      image: "/netflix2.png",
      link: "https://netflix-clone-mu-rosy.vercel.app/",
    },
    {
      id: 2,
      title: "ぽんぽんプログラミング",
      image: "/ponpon.png",
      link: "https://pontaro.net/",
    },
    // {
    //   id: 3,
    //   title: "Netflixクローン",
    //   image: "/netflix2.png",
    //   link: "https://netflix-clone-mu-rosy.vercel.app/",
    // },
    // {
    //   id: 4,
    //   title: "ぽんぽんプログラミング",
    //   image: "/ponpon.png",
    //   link: "https://pontaro.net/",
    // },
    // {
    //   id: 5,
    //   title: "Netflixクローン",
    //   image: "/netflix2.png",
    //   link: "https://netflix-clone-mu-rosy.vercel.app/",
    // },
    // {
    //   id: 6,
    //   title: "ぽんぽんプログラミング",
    //   image: "/ponpon.png",
    //   link: "https://pontaro.net/",
    // },
    // {
    //   id: 7,
    //   title: "Netflixクローン",
    //   image: "/netflix2.png",
    //   link: "https://netflix-clone-mu-rosy.vercel.app/",
    // },
    // {
    //   id: 8,
    //   title: "ぽんぽんプログラミング",
    //   image: "/ponpon.png",
    //   link: "https://pontaro.net/",
    // },
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const worksPerPage = 6;
  const totalPages = Math.ceil(works.length / worksPerPage);

  const getCurrentWorks = (): Project[] => {
    const start = currentPage * worksPerPage;
    const end = start + worksPerPage;
    return works.slice(start, end);
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
      setAnimationDirection("right");
    }
  };

  const handlePrevPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
      setAnimationDirection("left");
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
          <WorksInnerContainer animationDirection={animationDirection}>
            {getCurrentWorks()?.map((work) => (
              <WorkBoxContainer
                key={work?.id}
                href={work?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WorkBox bgImage={work?.image}></WorkBox>
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
                active={index === currentPage}
                onClick={() => setCurrentPage(index)}
              />
            ))}
        </PaginationContainer>
      </FadeIn>
    </Container>
  );
};
