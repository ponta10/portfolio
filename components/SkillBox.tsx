import Image from "next/image";
import React, { useState } from "react";
import { styled } from "styled-components";
import { Skill, breakpoints } from "@/utils/const";
import { Modal } from "./organisms/Modal";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  display: flex; // Add these
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.subText};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.sub};
  }

  @media (max-width: ${breakpoints.sm}) {
    width: calc(33% - 16px);
  }
`;

interface TextProps {
  size?: "sm" | "md" | "lg";
  as?: "p" | "span";
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.colors.subText};
  margin-top: 8px; // Adds space between image and text
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return props.theme.fontSizes.sm;
      case "md":
        return props.theme.fontSizes.md;
      case "lg":
        return props.theme.fontSizes.lg;
      default:
        return props.theme.fontSizes.md; // if none of the above matches, apply 'md' size
    }
  }};
`;

interface BoxProps {
  height: number;
}

const Box = styled.div<BoxProps>`
  height: ${(props) => props.height}px;
  display: flex; // Add these
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const SkillBox: React.FC<Skill> = ({ name, image, work, personal }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContainer>
          <div style={{ textAlign: "center" }}>
            <Box height={96}>
              <Image
                src={image}
                alt="Background Image"
                priority
                width={80}
                height={80}
              />
            </Box>
            <Text>{name}</Text>
          </div>
          <div>
            <Text>
              実務経験:{" "}
              <Text size="lg" as="span">
                {work}
              </Text>{" "}
              年
            </Text>
            <Text>
              個人経験:{" "}
              <Text size="lg" as="span">
                {personal}
              </Text>{" "}
              年
            </Text>
          </div>
        </ModalContainer>
      </Modal>
      <Container onClick={() => setIsOpen(true)}>
        <Box height={48}>
          <Image
            src={image}
            alt="Background Image"
            priority
            width={40}
            height={40}
          />
        </Box>
        <Text size="sm">{name}</Text>
      </Container>
    </>
  );
};
