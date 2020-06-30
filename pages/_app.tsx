// import App from 'next/app'

import { StylesProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {

  console.log(router.query.imageId)

  return (
    <StylesProvider injectFirst>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.query.imageId} />
      </AnimatePresence>
    </StylesProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
