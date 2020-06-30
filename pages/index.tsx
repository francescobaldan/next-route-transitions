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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid container>cxsda</Grid>
      <Link href="/images/0">
        <a>Image</a>
      </Link>
    </motion.div>
  );
};

export default Home;
