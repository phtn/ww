import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { motion } from "framer-motion";
import { Button } from "@blueprintjs/core";

const GetProduct: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode, WIDTH, HEIGHT, imageHeight, imageWidth } = state;
  return (
    <div
      style={Object.assign({}, styles.container, {
        height: HEIGHT - (imageHeight + 100),
        position: "absolute",
        top: HEIGHT - (HEIGHT - (imageHeight + 100)),
        // border: "1px solid red",
        width: WIDTH,
        left: 0
        // backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`
      })}
    >
      <motion.div
        animate={{
          backgroundColor: nightmode ? `rgb(236,183,49)` : `rgb(0,153,229)`
        }}
        // transition={{ delay: 600 }}
        style={{
          height: 100,
          width: imageWidth,

          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          rightIcon="cube-add"
          large={true}
          className="bp3-minimal"
          text="Add to cart"
          style={{
            height: 100,
            width: 300,
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.10rem"
          }}
        />
      </motion.div>
    </div>
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
