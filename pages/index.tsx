import Head from "next/head";
import Top from "@/components/pages/Top";

export default function Home() {
  return (
    <>
      <Head>
        <title>三浦 広太 | Kota Miura</title>
        <meta property="og:title" content="三浦 広太 | Kota Miura" />
        <meta
          property="og:description"
          content="学生エンジニア三浦広太のポートフォリオサイトです。"
        />
        <meta
          property="og:image"
          content="http://drive.google.com/uc?export=view&id=1yeuOBPDMfK4svymhtQUjWh6WuQLcK1Nn"
        />
        <meta
          property="og:url"
          content="https://portfolio-eight-gamma-93.vercel.app/"
        />
        <meta
          name="twitter:card"
          content="http://drive.google.com/uc?export=view&id=1yeuOBPDMfK4svymhtQUjWh6WuQLcK1Nn"
        />
      </Head>
      <Top />
    </>
  );
}
