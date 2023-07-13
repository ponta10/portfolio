import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.accent};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSizes.xxl};
`;


export default function Home() {
  return (
    <StyledButton>Click Me</StyledButton>
  )
}
