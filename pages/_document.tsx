import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <title>三浦 広太 | Kota Miura</title>
        <meta name="description" content="学生エンジニア三浦広太のポートフォリオサイトです。" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
