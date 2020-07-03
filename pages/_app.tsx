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
    borderRadius: 50,
    backgroundColor: "#ffffff",
    mixBlendMode: "exclusion",
  };

  const cursorStates = {
    default: {
      scale: 0.4,
      backgroundColor: "#ffffff",
      border: "2px solid #ffffff",
    },
    hover: {
      scale: 0.99,
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    blankClick: {
      scale: 0.3,
    },
    click: {
      scale: 0.4,
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
  };

  const movementConfig = { mass: 2, tension: 300, friction: 50 };

  const clickableElements = {
    byTag: ["A", "BUTTON"],
    byClassName: [".clickable"],
  };

  useEffect(() => {
    const updatedPath = [...prevPath];
    if (updatedPath[updatedPath.length - 1] !== router.asPath) {
      updatedPath.push(router.asPath);
      setPrevPath(updatedPath);
    }
  }, [router.asPath]);

  return (
    <StylesProvider injectFirst>
      <AnimatedCursorProvider cursorStyle={cursorStyle}>
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
