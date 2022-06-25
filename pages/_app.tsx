import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalContextProvider } from '../contexts/GlobalContext';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
