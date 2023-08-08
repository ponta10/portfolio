import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Caption } from "../Caption";
import { SlideLeft } from "../animations/SlideLeft";
import { FadeIn } from "../animations/FadeIn";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

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
  overflow-y: scroll;
  gap: 40px;
  padding-left: 60px;
  position: relative;
`;

const WorkBoxContainer = styled.a`
  width: calc(34% - 40px);
  height: 42%;
  margin-bottom: 40px;
`;

const WorkBox = styled.div<{ bgImage: string }>`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImage}); // この行を追加
  background-size: cover; // 背景画像を要素に合わせてサイズ調整
  background-position: center; // 背景画像の位置を中央に設定
  margin-bottom: 20px;
  margin-top: -20px;
`;

const WorkTitle = styled.span`
  color: #fff; // 文字色を白に設定
  text-align: center;
  display: block;
`;

// スクロールの目印として表示するコンポーネント
const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0px;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Work = () => {
  const works: Project[] = [
    {
      id: 1,
      title: "Netflixクローン",
      image: "/netflix2.png",
      link: "https://netflix-clone-seven-sandy-56.vercel.app/",
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
    //   link: "https://netflix-clone-seven-sandy-56.vercel.app/",
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
    //   link: "https://netflix-clone-seven-sandy-56.vercel.app/",
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
    //   link: "https://netflix-clone-seven-sandy-56.vercel.app/",
    // },
    // {
    //   id: 8,
    //   title: "ぽんぽんプログラミング",
    //   image: "/ponpon.png",
    //   link: "https://pontaro.net/",
    // },
  ];

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
          {works?.map((work) => (
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
          {/* {works?.length >= 6 && <ScrollIndicator>スクロールしてください</ScrollIndicator>} */}
        </WorkContainer>
      </FadeIn>
    </Container>
  );
};
