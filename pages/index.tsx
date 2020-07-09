/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid, Typography } from "@material-ui/core";
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          css={{
            height: "100vh",
            padding: 100,
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            "::selection": {
              color: "#ffffff",
              background: "#000000",
              opacity: 1,
            },
          }}
        >
          <Typography
            children="Transizioni custom fra Routes e custom cursor in Next.js"
            variant="h3"
            css={{
              fontWeight: 600,
              "::selection": {
                color: "#ffffff",
                background: "#000000",
              },
            }}
          />
          <Pointer>
            <Link href="/images/[imageId]" as="/images/1">
              <Link href="/images/1">
                <Typography
                  children="Slideshow immagini"
                  variant="h5"
                  css={{
                    marginTop: 92,
                    borderBottom: "2px solid #000000",
                    "::selection": {
                      color: "#ffffff",
                      background: "#000000",
                    },
                  }}
                />
              </Link>
            </Link>
          </Pointer>
          <Pointer>
            <Link href="/gallery">
              <Link href="/gallery">
                <Typography
                  children="Galleria"
                  variant="h5"
                  css={{
                    marginTop: 24,
                    borderBottom: "2px solid #000000",
                    "::selection": {
                      color: "#ffffff",
                      background: "#000000",
                    },
                  }}
                />
              </Link>
            </Link>
          </Pointer>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          css={{
            height: "100vh",
            padding: 100,
            boxSizing: "border-box",
            backgroundColor: "#000000",
          }}
        >
          <Typography
            children="Questo testo serve chiaramente solo a mostrare come si comporta il cursore in un testo bianco su sfondo nero."
            variant="h3"
            css={{
              fontWeight: 600,
              color: "#ffffff",
              "::selection": {
                color: "#000000",
                background: "#ffffff",
              },
            }}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Home;
