import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isLoginPath = router.pathname === '/login';

  return (
    <SessionProvider session={session}>
      <Layout showHeader={!isLoginPath}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
