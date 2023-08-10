import { breakpoints } from "@/utils/const";
import React from "react";
import { styled } from "styled-components";

interface Caption {
  title: string;
  subTitle: string;
  direction: "left" | "center" | "right";
}

const Container = styled.div<{ direction: "left" | "center" | "right" }>`
  text-align: ${(props) => props.direction};
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.sm}) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  letter-spacing: 5px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.subText};
  letter-spacing: 3px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;

export const Caption: React.FC<Caption> = ({ title, subTitle, direction }) => {
  return (
    <Container direction={direction}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
