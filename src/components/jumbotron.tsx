import React, { FC } from "react";
import { motion } from "framer-motion";

const Jumbotron: FC = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        height: 300,
        // backgroundColor: "rgba(255,255,213,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          // background: "tomato",
          borderRadius: 15
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20
        }}
      >
        <h1
          className="bp3-heading"
          style={{ fontFamily: "MontSerrat, sans-serif", color: "#3882AF" }}
        >
          The Ultimate Water Filtration Package
        </h1>
      </motion.div>
    </div>
  );
};
const styles = {
  container: {
    position: "absolute"
  }
};
export default Jumbotron;
