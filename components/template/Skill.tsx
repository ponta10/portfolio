import React from "react";
import { Caption } from "../Caption";
import { SkillContainer } from "../SkillContainer";
import { backends, devops, frontends } from "@/utils/skills";

export const Skill = () => {
  return (
    <>
      <Caption
        title="SKILL"
        subTitle="my technical proficiency"
        direction="left"
      />
      <SkillContainer label="frontend" data={frontends} />
      <SkillContainer label="backend" data={backends} />
      <SkillContainer label="DevOps" data={devops} />
    </>
  );
};
