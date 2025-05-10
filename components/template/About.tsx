import React from "react";
import { Caption } from "../atoms/Caption";
import { styled } from "styled-components";
import Image from "next/image";
import backImage from "@/public/ponta.jpg";
import { FadeIn } from "../animations/FadeIn";
import { SlideLeft } from "../animations/SlideLeft";
import { breakpoints } from "@/utils/const";

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

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  border: 1px solid ${(props) => props.theme?.colors.gray};
  box-shadow: 1px 1px 2px ${(props) => props.theme?.colors.gray};
  padding: 48px;
  background: linear-gradient(150deg, #222, #000);

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 48px 32px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 24px 16px;
  }
`;

const TextContainer = styled.div`
  margin-top: 2px;
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 3px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

const Detail = styled.p`
  color: ${(props) => props.theme.colors.subText};
  margin: 20px 0;
  width: 80%;
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: 1px;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  color: ${(props) => props.theme.colors.subText};

  @media (max-width: ${breakpoints.sm}) {
    width: 150px;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const StyledImage = styled(Image)`
  drop-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  object-fit: cover;

  @media (max-width: ${breakpoints.lg}) {
    width: 300px;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
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
              学びハッカソンや長期チーム開発に出場。毎回2位以上の成績を収めている。現在はバックエンド
              エンジニアとして株式会社メルカリに勤務。
              好きな技術はGoとk8s。
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
