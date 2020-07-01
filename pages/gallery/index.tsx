/** @jsx jsx */
import { jsx } from "@emotion/core";
import data from "../../utils/data";
import { Grid, Typography, Button } from "@material-ui/core";
import { motion, MotionProps } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

const GalleryPage = ({ images }) => {
  const router = useRouter();

  const [rect, setRect] = useState(undefined);
  const [fullImage, setFullImage] = useState("");

  useEffect(() => {
    console.log(rect);
    console.log(rect === undefined ? 1 : 0);
  }, [rect]);

  const fade = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    hidden: {
      y: 0,
      opacity: 0,
      pointerEvents: "none",
      cursor: "default",
      transition: {
        duration: 0.4,
        ease: [0.5, 0, 0.75, 0],
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const onImageClick = (event, index) => {
    setRect(event?.target?.getBoundingClientRect());
    setFullImage(images[index]?.urls?.high);
    console.log(index);
    setTimeout(() => router.push(`/gallery/${images[index]?.index}`), 800);
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      {rect && (
        <motion.div
          animate={{
            top: 72,
            left: "50%",
            width: 1200,
            height: 420,
            marginLeft: -600,
            transition: {
              duration: 0.3,
              delay: 0.4,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          css={{
            position: "fixed",
            top: rect?.y,
            left: rect?.x,
            width: rect?.width,
            height: rect?.height,
          }}
        >
          <img
            src={fullImage}
            css={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        </motion.div>
      )}
      <Grid
        container
        css={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        <Typography
          children="My gallery"
          css={{
            fontSize: 32,
            fontWeight: 500,
            marginTop: 108,
            marginBottom: 52,
          }}
        />
      </Grid>
      <motion.div variants={stagger}>
        <Grid container spacing={4} css={{ maxWidth: 1200, margin: "0 auto" }}>
          {images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <motion.div
                variants={fade}
                animate={!rect ? "animate" : "hidden"}
                // whileHover={{ scale: 0.96 }}
                // whileTap={{ position: "absolute" }}
                css={{ willChange: "transform", cursor: "pointer" }}
              >
                <img
                  src={image?.urls?.low}
                  onClick={(e) => onImageClick(e, index)}
                  css={{
                    width: "100%",
                    height: 272,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </motion.div>
            </Grid>
          ))}
          
        </Grid>
      </motion.div>
    </motion.div>
  );
};

GalleryPage.getInitialProps = () => {
  const images = data;
  return { images };
};

export default GalleryPage;
