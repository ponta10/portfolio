import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import backImage from "@/public/html.png";
import { Skill } from "@/utils/skills";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  display: flex;         // Add these
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.subText};
  margin-top: 8px;     // Adds space between image and text
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const Box = styled.div`
  width: 48px;
  height: 48px;
  display: flex;         // Add these
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SkillBox: React.FC<Skill> = ({ name, image }) => {
  return (
    <Container>
      <Box>
        <Image
        src={image}
        alt="Background Image"
        priority
        width={40}
        height={40}
        />
      </Box>
      <Text>{name}</Text>
    </Container>
  );
};
