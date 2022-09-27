import '../styles/globals.css'
import Head from "next/head"
import TransitionContext from '../utils/Transition_Context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from '../utils/AuthContext';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
        <title>Detailku</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <AuthContextProvider>
      <TransitionContext>
        <Component {...pageProps} />
      </TransitionContext>
    </AuthContextProvider>
    <ToastContainer
      position="top-right"
      autoClose={2200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>)
}

export default MyApp
