import React from "react";
import { Caption } from "../atoms/Caption";
import { styled } from "styled-components";
import { SlideRight } from "../animations/SlideRight";
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

// Event タイプの定義
interface Event {
  year: string;
  description: string;
}

// 経歴データ
const events: Event[] = [
  {
    year: "2002",
    description: "埼玉県で爆誕",
  },
  {
    year: "2021",
    description: "慶應義塾大学入学",
  },
  {
    year: "2021",
    description: "学生団体POSSE入会",
  },
  {
    year: "2022",
    description: "株式会社パーツワンインターン",
  },
  {
    year: "2023",
    description: "ヤフー株式会社サマーインターン",
  },
  {
    year: "2023",
    description: "CARTA HOLDINGSサマーインターン",
  },
];

// Styled components
const TimelineWrapper = styled.div`
  position: relative;
  margin: 30px auto;
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    background: ${(props) => props.theme.colors.accent};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

const Event = styled.div`
  position: relative;
  margin-bottom: 20px;
  .box {
    padding: 16px 20px;
    background: ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.text};
    position: relative;
    border-radius: 6px;
    box-shadow: 1px 1px 3px 1px ${(props) => props.theme.colors.subText};
  }
`;

const EventDot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.subText};
  left: 50%;
  top: 0;
  margin-left: -6px;
`;

const EventLine = styled.div`
  position: absolute;
  width: calc(50% - 12px);
  height: 5px;
  background: ${(props) => props.theme.colors.gray};
  top: 6px;
`;

const EventRight = styled(Event)`
  .box {
    margin-right: 60%;
    text-align: right;
  }
  ${EventDot} {
    right: 50%;
  }
  ${EventLine} {
    right: 50%;
    margin-right: 12px;
  }
`;

const EventLeft = styled(Event)`
  .box {
    margin-left: 60%;
  }
  ${EventDot} {
    left: 50%;
  }
  ${EventLine} {
    left: 50%;
    margin-left: 12px;
  }
`;

interface TextProps {
  size?: "sm" | "md" | "lg";
  as?: "p" | "span";
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.colors.subText};
  font-size: ${(props) => props.theme.fontSizes.md};
  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const Career = () => {
  return (
    <Container>
      <SlideRight>
        <Caption
          title="CAREER"
          subTitle="my professional journey"
          direction="right"
        />
      </SlideRight>
      <TimelineWrapper>
        {events.map((event, index) => {
          const EventComponent = index % 2 === 0 ? EventLeft : EventRight;

          const WrappedEvent = (
            <EventComponent key={index}>
              <EventDot />
              <EventLine />
              <div className="box">
                <Text>{event.year}</Text>
                <Text>{event.description}</Text>
              </div>
            </EventComponent>
          );

          // indexが偶数の場合、SlideLeftで囲む
          if (index % 2 === 0) {
            return <SlideLeft key={index}>{WrappedEvent}</SlideLeft>;
          }

          // indexが奇数の場合、SlideRightで囲む
          return <SlideRight key={index}>{WrappedEvent}</SlideRight>;
        })}
      </TimelineWrapper>
    </Container>
  );
};
