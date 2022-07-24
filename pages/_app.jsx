import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Document</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />7
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
