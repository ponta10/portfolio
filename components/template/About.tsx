import React from "react";
import { Caption } from "../atoms/Caption";
import { styled } from "styled-components";
import Image from "next/image";
import backImage from "@/public/ponta.jpg";
import { FadeIn } from "../animations/FadeIn";
import { SlideLeft } from "../animations/SlideLeft";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //   align-items: center;
  //   gap: 40px;
  margin-top: 40px;
  //   margin-bottom: 60px;
  border: 1px solid ${(props) => props.theme?.colors.gray};
  box-shadow: 1px 1px 2px ${(props) => props.theme?.colors.gray};
  padding: 48px;
  background: linear-gradient(150deg, #222, #000);
`;

const TextContainer = styled.div`
  margin-top: 2px;
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 3px;
`;

const Detail = styled.p`
  color: ${(props) => props.theme.colors.subText};
  margin: 20px 0;
  width: 80%;
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: 1px;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px; // あなたの好きな幅に変更することができます
  color: ${(props) => props.theme.colors.subText};
`;

const StyledImage = styled(Image)`
  //   filter: contrast(1.2) brightness(0.9);
  drop-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
`;

export const About = () => {
  return (
    <Container>
      <SlideLeft>
        <Caption
          title="ABOUT"
          subTitle="introduce my profile"
          direction="left"
        />
      </SlideLeft>
      <FadeIn>
        <ProfileContainer>
          <TextContainer>
            <Name>三浦 広太</Name>
            <Detail>
              埼玉県出身の現役慶應義塾大学生。大学生活の初めにIT技術に
              惹かれプログラミング学習を開始。学生団体でweb技術の基礎を
              学びハッカソンや長期チーム開発に出場。毎回2位以上の成績を収めている。現在はフロントエンド
              エンジニアとしてインターンシップを行なっている。
              好きな技術はReactとGo。
            </Detail>
            <StyledLink>
              <span>Blog:</span>
              <a
                href="https://pontaro.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pontaro.net
              </a>
            </StyledLink>

            <StyledLink>
              <span>Github:</span>
              <a
                href="https://github.com/ponta10"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ponta10
              </a>
            </StyledLink>
          </TextContainer>
          <StyledImage
            src={backImage}
            width={500}
            height={500}
            alt="Profile Image"
          />
        </ProfileContainer>
      </FadeIn>
    </Container>
  );
};
