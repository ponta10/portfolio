import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  width?: string;
  color?: string;
  bgColor?: string;
}

const CustomButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || props.theme.colors.accent};
  color: ${(props) => props.color || props.theme.colors.base};
  padding: 8px 24px;
  border-radius: 8px;
  width: ${(props) => props.width || "auto"};
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  color,
  bgColor,
}) => {
  return (
    <CustomButton type="submit" width={width} color={color} bgColor={bgColor}>
      {children}
    </CustomButton>
  );
};
