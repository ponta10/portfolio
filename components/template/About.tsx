import React from "react";
import { Caption } from "../Caption";
import { styled } from "styled-components";
import Image from "next/image";
import backImage from "@/public/ponta.jpg";

const timelineData = [
  { year: "2002", event: "埼玉県で爆誕" },
  { year: "2018", event: "浦和高校入学" },
  { year: "2021", event: "慶應義塾大学入学" },
  { year: "2021", event: "学生団体POSSE入会" },
  { year: "2022", event: "株式会社パーツワンインターン" },
  { year: "2023", event: "ヤフー株式会社サマーインターン" },
];

const Timeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  color: ${(props) => props.theme?.colors.subText};
`;

const Event = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme?.fontSizes.sm};
`;

const Year = styled.div`
font-size: ${(props) => props.theme?.fontSizes.md};
margin-bottom: 4px;
`

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: ${(props) => props.theme?.colors.gray};
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
//   align-items: center;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 60px;
`;

const TextContainer = styled.div`
  margin-top: 2px;
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

const Detail = styled.p`
  color: ${(props) => props.theme.colors.subText};
  margin: 20px 0;
  width: 80ch; // chは文字の0の幅を基準にした単位です。 
  white-space: pre-wrap; // 改行と空白を保持し、必要に応じて折り返します。
  word-wrap: break-word; // 単語が要素の境界を超える場合に折り返します。
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px; // あなたの好きな幅に変更することができます
  color: ${(props) => props.theme.colors.subText};
`;

export const About = () => {
  return (
    <div>
      <Caption title="ABOUT" subTitle="introduce my profile" direction="left" />
      <ProfileContainer>
        <TextContainer>
          <Name>三浦広太</Name>
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
        <Image src={backImage} width={500} height={500} alt="Profile Image" />
      </ProfileContainer>
      <Timeline>
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <Event>
              <Year>{item.year}</Year>
              <div>{item.event}</div>
            </Event>
            {index < timelineData.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </Timeline>
    </div>
  );
};
