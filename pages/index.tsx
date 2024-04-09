import Head from "next/head";
import Top from "@/components/pages/Top";

export default function Home() {
  return (
    <>
      <Head>
        <title>三浦 広太 | Kota Miura</title>
        <meta property="og:title" content="三浦 広太 | Kota Miura" />
      </Head>
      <Top />
    </>
  );
}
