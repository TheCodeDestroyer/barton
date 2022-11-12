import { FC } from 'react';

import { Nunito, Indie_Flower } from '@next/font/google';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  preload: true,
  subsets: ['latin']
});

const indieFlower = Indie_Flower({
  variable: '--font-indie-flower',
  weight: '400',
  preload: true,
  subsets: ['latin']
});

const classNames = (...list: string[]) => list.join(' ');

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <main className={classNames(nunito.variable, indieFlower.variable)}>
    <Component {...pageProps} />
  </main>
);

export default App;
