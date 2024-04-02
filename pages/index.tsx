import { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/atoms/LoadingScreen";


const Top = dynamic(() => import('@/components/pages/Top'), {
  loading: () => <LoadingScreen />,
});


export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Top />
    </Suspense>
  );
}
