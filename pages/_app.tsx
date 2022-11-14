import { FC } from 'react';

import { ApolloProvider } from '@apollo/client';
import { Nunito, Indie_Flower } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import apolloClient from '../config/apollo-client.config';

import '../styles/globals.css';

import { classNames } from '../util/jsx.util';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin']
});

const indieFlower = Indie_Flower({
  variable: '--font-indie-flower',
  weight: '400',
  subsets: ['latin']
});

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Head>
      <title>Barton</title>
    </Head>
    <main
      className={classNames(
        nunito.variable,
        indieFlower.variable,
        'font-sans text-primary min-w-[320px]'
      )}
    >
      <Component {...pageProps} />
    </main>
  </ApolloProvider>
);

export default App;
