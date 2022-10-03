import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { MantineProvider, Container } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Psychotouren</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Container>
          <NextNProgress color="#0B2027"/>
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  );
}
