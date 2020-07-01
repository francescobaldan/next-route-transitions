/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import data from "../../utils/data";
import { Grid, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ImagePage = ({ image }) => {
  const router = useRouter();

  const index = parseInt(router?.query?.imageId as string);

  useEffect(() => {
    console.log("mounty");
  }, []);

  const [scale, setScale] = useState(1);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 1,  }}>
      <Global
        styles={{ "*": { userSelect: "none" }, body: { overflow: "hidden" } }}
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          // filter: "contrast(150%) grayscale(60%)",
        }}
        animate={{
          opacity: 1,
          scale: scale,
          // filter: "contrast(100%) grayscale(0%)",
          transition: { ease: [0.25, 1, 0.5, 1], duration: 0.8 },
        }}
        exit={{
          opacity: 0,
          scale: 1.3,
          // filter: "contrast(150%) grayscale(60%)",
          transition: { ease: [0.5, 0, 0.75, 0], duration: 0.7 },
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          css={{
            width: "100%",
            height: "100vh",
            background: `url(${image?.url}) no-repeat center center fixed`,
            backgroundSize: "cover",
          }}
        >
          <Grid
            item
            container
            alignItems="center"
            css={{ paddingLeft: 48, paddingRight: 48, height: 80 }}
          >
            <Typography
              children=".nature"
              css={{
                fontSize: 24,
                // fontWeight: 700,
                color: "#000000",
              }}
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            css={{ flex: 1 }}
          >
            <div css={{ position: "relative", textAlign: "center" }}>
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.2,
                    duration: 0.6,
                  },
                }}
                exit={{
                  y: -30,
                  scale: 1.2,
                  opacity: 0,
                  transition: {
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.1,
                    duration: 0.2,
                  },
                }}
                css={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Typography
                  children={image?.title}
                  css={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    fontFamily: "Playfair Display",
                    fontSize: 112,
                    fontWeight: 600,
                    letterSpacing: 8,
                    color: "#ffffff",
                    textShadow: "0px 8px 16px rgba(0, 0, 0, .24)",
                    zIndex: 5,
                  }}
                />
              </motion.div>
              <Typography
                children={image?.index}
                css={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 540,
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, .3)",
                  zIndex: 4,
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            css={{ paddingLeft: 48, paddingRight: 48, height: 80 }}
          >
            <Typography
              children={`Author: ${image?.author}`}
              css={{
                fontSize: 18,
                // fontWeight: 700,
                color: "#000000",
              }}
            />
            <Button
              children="Zonta"
              onClick={() => setScale((scale) => scale - 0.1)}
            />
            <Link
              passHref
              href="/images/[imageId]"
              as={`/images/${index === 4 ? 1 : index + 1}`}
            >
              <a css={{ textDecoration: "none" }}>
                <Typography
                  children={`Vai alla pagina successiva`}
                  css={{
                    fontSize: 18,
                    cursor: "pointer",
                    color: "#000000",
                  }}
                />
              </a>
            </Link>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
};

ImagePage.getInitialProps = (ctx) => {
  // const image = data[parseInt(ctx?.query?.imageId)];
  const image = data.find(
    (image) => image.index === parseInt(ctx?.query?.imageId)
  );

  return { image };
};

export default ImagePage;
