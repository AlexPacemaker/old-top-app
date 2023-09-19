import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
