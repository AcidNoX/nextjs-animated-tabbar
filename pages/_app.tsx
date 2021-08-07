import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import { GlobalStyle } from './../components/layout/global-style';
import { Layout } from '../components/layout';
import { NavBar } from '../components/nav-bar';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AnimatePresence initial={false}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <NavBar />
      </Layout>
    </>
  )
}
export default MyApp
