import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: any;
  width?: string;
  color?: string;
  bgColor?: string;
}

const CustomButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || props.theme.colors.accent};
  color: ${(props) => props.color || props.theme.colors.base};
  padding: 12px 36px;
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
