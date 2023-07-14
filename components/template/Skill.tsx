import React from "react";
import { Caption } from "../Caption";
import { SkillContainer } from "../SkillContainer";
import { backends, devops, frontends } from "@/utils/skills";
import { styled } from "styled-components";

const Container = styled.div`
width: 80%;
margin: 0 auto;
`

export const Skill = () => {
  return (
    <Container>
      <Caption
        title="SKILL"
        subTitle="my technical proficiency"
        direction="left"
      />
      <SkillContainer label="frontend" data={frontends} />
      <SkillContainer label="backend" data={backends} />
      <SkillContainer label="DevOps" data={devops} />
    </Container>
  );
};
