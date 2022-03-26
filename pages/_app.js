import '../styles/globals.css'
import Head from "next/head"
import TransitionContext from '../utils/Transition_Context'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <TransitionContext>
      <Component {...pageProps} />
    </TransitionContext>
  </>)
}

export default MyApp
