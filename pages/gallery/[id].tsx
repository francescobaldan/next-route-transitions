/** @jsx jsx */
import { jsx } from "@emotion/core";
import data from "../../utils/data";
import { motion } from "framer-motion";
import { Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";

const GalleryImage = ({ image, ...otherProps }) => {
  
  console.log(otherProps);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Grid
        container
        css={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: 72,
          boxSizing: "border-box",
        }}
      >
        <img
          src={image?.urls?.high}
          css={{
            width: "100%",
            height: 420,
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
      </Grid>
      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.3 } } }}
      >
        <Grid
          container
          css={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingTop: 48,
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Typography
              children={image?.title}
              variant="h2"
              css={{ fontWeight: 500 }}
            />
          </motion.div>
        </Grid>
        <Grid
          container
          css={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingTop: 24,
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Typography
              children={image?.author}
              variant="body1"
              css={{ fontSize: 18, fontWeight: 500 }}
            />
          </motion.div>
        </Grid>
        <Grid
          container
          css={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingTop: 36,
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Typography
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum risus sit amet gravida iaculis. Pellentesque aliquet egestas porta. In ornare arcu vel urna vulputate, quis condimentum mauris hendrerit. Mauris faucibus sed magna laoreet condimentum. Praesent commodo metus et odio feugiat tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel rutrum enim, eget pretium mauris. Aliquam ultricies mattis nisl, nec tempor lacus luctus eu."
              variant="body1"
            />
          </motion.div>
        </Grid>
      </motion.div>
    </motion.div>
  );
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

GalleryImage.getInitialProps = (ctx) => {
  // const image = data[parseInt(ctx?.query?.imageId)];
  const image = data.find((image) => image.index === parseInt(ctx?.query?.id));

  return { image };
};

export default GalleryImage;
