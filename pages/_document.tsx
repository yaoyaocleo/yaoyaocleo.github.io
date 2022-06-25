import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}