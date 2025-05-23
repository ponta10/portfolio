import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px dashed rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px dashed ${(props) => props.theme.colors.text};
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.base};
`;

const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const Loading: React.FC = () => {
  return (
    <Background>
      <Loader />
      <LoadingText>送信中...</LoadingText>
    </Background>
  );
};
