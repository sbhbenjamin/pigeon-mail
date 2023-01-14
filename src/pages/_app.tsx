import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPath = router.pathname === '/login';

  return (
    <Layout showHeader={!isLoginPath}>
      <Component {...pageProps} />
    </Layout>
  );
}
