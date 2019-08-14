import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { motion } from "framer-motion";

const GetProduct: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode } = state;
  return (
    <motion.div
      animate={{
        backgroundColor: nightmode ? `#ecb731` : `rgb(0,153,229)`
      }}
      style={Object.assign({}, styles.container, {
        position: "absolute",
        top: window.innerHeight - 100
        // backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`
      })}
    >
      <span>Get Product</span>
    </motion.div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: 100,
    // border: "1px solid tomato",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    // position: "absolute"
    // top: window.innerHeight - 100
  }
};
export default GetProduct;
