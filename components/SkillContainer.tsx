import React from "react";
import { styled } from "styled-components";
import { SkillBox } from "./SkillBox";
import { Skill } from "@/utils/skills";

interface SkillContainer {
  label: string;
  data: Skill[];
}

const Container = styled.div`
  margin-top: 36px;
  text-align: right;
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors.subText};
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.fontSizes.md};
`;

const Box = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const SkillContainer: React.FC<SkillContainer> = ({ label, data }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Box>
        {" "}
        {data?.map((skill) => (
          <SkillBox
            key={skill?.id}
            name={skill?.name}
            image={skill?.image}
            work={skill?.work}
            personal={skill?.personal}
          />
        ))}
      </Box>
    </Container>
  );
};
