/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

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
      <Grid container>cxsda</Grid>
      <Link href="/images/[imageId]" as="/images/1">
        <a>Image</a>
      </Link>
      <div
        css={{
          width: 400,
          height: 300,
          backgroundColor: "#000",
          marginTop: 100,
        }}
      />
    </motion.div>
  );
};

export default Home;
