import React from "react";
import { styled } from "styled-components";

const ScrollNotifier = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const ScrollText = styled.span`
  position: absolute;
  left: -24px;
  bottom: 10px;
  color: ${(props) => props.theme.colors.subText};
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;
`;

const Arrow = styled.div`
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: -6px;
    width: 1.2px;
    height: 20px;
    background: ${(props) => props.theme.colors.subText};
    transform: skewX(-31deg);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.2px;
    height: 66px;
    background: ${(props) => props.theme.colors.subText};
  }
`;

function Scroll() {
  return (
    <div>
      {/* その他のコンテンツ */}
      <ScrollNotifier>
        <ScrollText>Scroll</ScrollText>
        <Arrow />
      </ScrollNotifier>
    </div>
  );
}

export default Scroll;
