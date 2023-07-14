import React from "react";
import { styled } from "styled-components";

interface Caption {
  title: string;
  subTitle: string;
  direction: "left" | "center" | "right";
}

const Container = styled.div<{ direction: "left" | "center" | "right" }>`
  text-align: ${(props) => props.direction};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  letter-spacing: 5px;
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.subText};
  letter-spacing: 3px;
`;

export const Caption: React.FC<Caption> = ({ title, subTitle, direction }) => {
  return (
    <Container direction={direction}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
