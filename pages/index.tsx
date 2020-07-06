/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import AnimatedCursorProvider, { Pointer } from "../components/AnimatedCursor";

const Home = () => {
  useEffect(() => {
    console.log("mounty");
  }, []);

  return (
    <motion.div
      style={{ padding: 99 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {/* <AnimatedCursorProvider
        cursorStyle={{ width: 10, height: 10, backgroundColor: "red" }}
        states={{
          default: { borderRadius: 10 },
          hover: {},
          blankClick: {},
          click: {},
        }}
      > */}
        <React.Fragment>
          <h1>hnujixsaj</h1>
          <Grid container>cxsda</Grid>
          <Pointer>
            <Link href="/images/[imageId]" as="/images/1">
              <a>
                <div>acdscdscdscdescdscds</div>
              </a>
            </Link>
          </Pointer>
          <div
            style={{
              width: 50,
              height: 50,
              cursor: "pointer",
              backgroundColor: "blue",
            }}
          />
          <div
            css={{
              width: 400,
              height: 300,
              backgroundColor: "#000",
              marginTop: 100,
            }}
          />
        </React.Fragment>
      {/* </AnimatedCursorProvider> */}
    </motion.div>
  );
};

export default Home;
