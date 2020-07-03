// import App from 'next/app'

import { StylesProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AnimatedCursorProvider from "../components/AnimatedCursor";

function MyApp({ Component, pageProps, router }) {
  const [prevPath, setPrevPath] = useState([router.asPath]);

  useEffect(() => {
    const updatedPath = [...prevPath];
    if (updatedPath[updatedPath.length - 1] !== router.asPath) {
      updatedPath.push(router.asPath);
      setPrevPath(updatedPath);
    }
  }, [router.asPath]);

  return (
    <StylesProvider injectFirst>
      <AnimatedCursorProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} prevPath={prevPath} key={router.asPath} />
        </AnimatePresence>
      </AnimatedCursorProvider>
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
