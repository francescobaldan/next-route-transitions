// import App from 'next/app'

import { StylesProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AnimatedCursorProvider from "../components/AnimatedCursor";

function MyApp({ Component, pageProps, router }) {
  const [prevPath, setPrevPath] = useState([router.asPath]);

  const cursorStyle = {
    width: 100,
    height: 100,
    borderRadius: 100,
    mixBlendMode: "exclusion",
  };

  const cursorStates = {
    default: {
      scale: 0.4,
      rotate: "45deg",
      backgroundColor: "#ffffff",
      border: "2px solid #ffffff",
    },
    hover: {
      scale: 0.99,
      rotate: "20deg",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    blankClick: {
      scale: 0.3,
      rotate: "135deg",
    },
    click: {
      scale: 0.9,
      rotate: "110deg",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
  };

  const movementConfig = { mass: 2, tension: 300, friction: 50 };

  useEffect(() => {
    const updatedPath = [...prevPath];
    if (updatedPath[updatedPath.length - 1] !== router.asPath) {
      updatedPath.push(router.asPath);
      setPrevPath(updatedPath);
    }
  }, [router.asPath]);

  return (
    <StylesProvider injectFirst>
      <AnimatedCursorProvider
        cursorStyle={cursorStyle}
        states={cursorStates}
        movementConfig={movementConfig}
        animationConfig={{
          tension: 500,
          friction: 60,
          clamp: true,
        }}
      >
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
