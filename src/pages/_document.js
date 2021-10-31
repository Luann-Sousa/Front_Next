import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
