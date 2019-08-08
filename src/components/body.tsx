import React, { FC, useContext, useEffect } from "react";
// import { Card, Button, Elevation } from "@blueprintjs/core";
import { motion } from "framer-motion";
import { UIContext } from "../context/ui-context";

// COMPONENTS
import Slider from "../components/slider";
import Jumbotron from "./jumbotron";

const Body: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, HEIGHT, WIDTH } = state;

  useEffect(() => {
    const handleResize = () =>
      setState((state: {}) => ({
        ...state,
        WIDTH: window.innerWidth,
        HEIGHT: window.innerHeight
      }));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <motion.div
      style={Object.assign({}, styles.container, {
        backgroundColor: nightmode ? "rgb(21,32,43)" : "white",
        height: HEIGHT - 50,
        width: WIDTH
      })}
    >
      <div style={Object.assign({}, styles.content, { height: HEIGHT - 50 })}>
        <Jumbotron />
        <Slider />
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: 200
    // position: "absolute"
  },
  content: {
    // border: "1px solid green",
    // display: "flex"
    // width: "100%"
    // alignItems: "center"
    // justifyContent: "center"
  }
};
export default Body;
