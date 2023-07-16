import React from "react";
import { styled } from "styled-components";
import { Caption } from "../Caption";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Work = () => {
  return (
    <Container>
      <Caption
        title="WORK"
        subTitle="showcase of creations"
        direction="left"
      />
    </Container>
  );
};
