import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

//TypeScriptの型定義 (今回は無視してOK)
type fadeAnimationType = {
  children: ReactNode;
};

export const SlideLeft = (props: fadeAnimationType) => {
  const { children } = props;

  /**
   * スクロールイベントのオプション
   * 「ref」検知する要素
   * 「inView」要素が見えたかどうか(見えたらtrue)
   * 「rootMargin」要素の検知の「余白」を設定
   * 「triggerOnce」検知を一度だけ行うかどうか
   */
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });

  return (
    /**
     * ★スクロールさせたい要素を囲む
     * refで指定すると対象の要素になる
     * inViewのtrueかfalseを受け取り、styled-componentに渡す
     */
    <SlideFromLeftElem inView={inView} ref={ref}>
      {children}
    </SlideFromLeftElem>
  );
};

/**
 * ★inView(trueかfalse)で受け取り、それに応じてcssを切り替える
 */
const SlideFromLeftElem = styled.span<{ inView: boolean }>`
  display: inline-block;
  transition:
    transform 0.6s ease,
    opacity 0.6s cubic-bezier(0.47, 0, 0.745, 0.715);
  transform: translateX(${(props) => (props.inView ? "0" : "-50px")});
  opacity: ${(props) => (props.inView ? 1 : 0)};
  width: 100%;
`;
