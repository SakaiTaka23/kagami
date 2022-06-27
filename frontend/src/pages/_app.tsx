import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';

import createEmotionCache from '@/cache/createEmotionCache';
import { ResponsiveAppBar } from '@/components/Header';
import { AuthProvider } from '@/firebase/authContext';
import theme from '@/styles/theme/theme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('firebase-authentication-jwt');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ApolloProvider client={client}>
            <CssBaseline />
            <ResponsiveAppBar />
            <Container maxWidth='sm'>
              <Component {...pageProps} />
            </Container>
          </ApolloProvider>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
