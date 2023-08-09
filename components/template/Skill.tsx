import React from "react";
import { Caption } from "../atoms/Caption";
import { SkillContainer } from "../SkillContainer";
import { backends, devops, frontends } from "@/utils/skills";
import { styled } from "styled-components";
import { SlideRight } from "../animations/SlideRight";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Skill = () => {
  return (
    <Container>
      <SlideRight>
        {" "}
        <Caption
          title="SKILL"
          subTitle="my technical proficiency"
          direction="right"
        />
      </SlideRight>
      <SkillContainer label="frontend" data={frontends} />
      <SkillContainer label="backend" data={backends} />
      <SkillContainer label="DevOps" data={devops} />
    </Container>
  );
};
