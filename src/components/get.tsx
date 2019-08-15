import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { motion } from "framer-motion";
import { Button } from "@blueprintjs/core";

const GetProduct: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode, WIDTH, HEIGHT, imageHeight, imageWidth } = state;
  return (
    <motion.div
      animate={{
        backgroundColor: "rgba(0,0,0,0)",
        width: WIDTH
      }}
      style={Object.assign({}, styles.container, {
        height: HEIGHT - (imageHeight + 100),
        position: "absolute",
        top: HEIGHT - (HEIGHT - (imageHeight + 100)),
        left: 0
        // backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`
      })}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 600 }}
        style={{
          height: 100,
          width: imageWidth,
          backgroundColor: nightmode ? `#ecb731` : `rgb(0,153,229)`,
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          className="bp3-minimal"
          text="Add to cart"
          style={{
            height: 100,
            width: 300,
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.2rem"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const styles = {
  container: {
    // height: 100,
    // border: "1px solid tomato",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    // position: "absolute"
    // top: window.innerHeight - 100
  }
};
export default GetProduct;
