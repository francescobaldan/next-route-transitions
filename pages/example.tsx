/** @jsx jsx */
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";

const Example = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div
        css={{
          width: "100%",
          height: 400,
          background:
            'url("https://images.unsplash.com/photo-1592251170511-5a8f74c00a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") no-repeat center center fixed',
          backgroundSize: "cover",
        }}
      />
    </motion.div>
  );
};

export default Example;
