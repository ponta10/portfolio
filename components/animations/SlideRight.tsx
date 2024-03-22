import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface fadeAnimationType {
  children: ReactNode;
}

export const SlideRight = (props: fadeAnimationType) => {
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
    <SlideFromRightElem $inview={inView} ref={ref}>
      {children}
    </SlideFromRightElem>
  );
};

/**
 * ★inView(trueかfalse)で受け取り、それに応じてcssを切り替える
 */
const SlideFromRightElem = styled.span<{ $inview: boolean }>`
  display: inline-block;
  transition:
    transform 0.6s cubic-bezier(0.47, 0, 0.745, 0.715),
    opacity 0.6s cubic-bezier(0.47, 0, 0.745, 0.715);
  transform: translateX(${(props) => (props.$inview ? "0" : "50px")});
  opacity: ${(props) => (props.$inview ? 1 : 0)};
  width: 100%;
`;
