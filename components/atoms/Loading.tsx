import styled, { keyframes } from "styled-components";

// アニメーションのキーフレーム定義
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// ローダーのスタイリング
const Loader = styled.div`
  border: 4px dashed rgba(255, 255, 255, 0.3); // 薄白の点線
  border-radius: 50%;
  border-top: 4px dashed white; // 上部の線だけ白くする
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

// 全体の背景
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled.p`
  color: white;
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
