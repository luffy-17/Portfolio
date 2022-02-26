import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Laxmikant Nishad - Data Science Enthusiast" />
          <meta name="description" content="I am a 3rd-year Computer Science student💻. currently pursuing my bachelor's degree in Russia. 😀Data Science Enthusiast" />
          <meta property="og:title" content="Laxmikant Nishad - Data Science Enthusiast" />
          <meta property="og:description" content="I am a 3rd-year Computer Science student💻. currently pursuing my bachelor's degree in Russia. 😀Data Science Enthusiast" />
      
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
