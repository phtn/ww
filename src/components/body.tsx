import React, { FC, useContext } from "react";
// import { Card, Button, Elevation } from "@blueprintjs/core";
import { motion } from "framer-motion";
import { UIContext } from "../context/ui-context";

const Body: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode, HEIGHT } = state;
  return (
    <motion.div
      style={Object.assign({}, styles.container, {
        backgroundColor: nightmode ? "rgb(21,32,43)" : "white",
        height: HEIGHT - 50
      })}
    >
      {/* <Card interactive={false} elevation={Elevation.ONE}>
        <h5>
          <a href="#">LOGIN</a>
        </h5>
        <Button intent="primary">with Google</Button>
      </Card> */}
      <div style={styles.content} />
    </motion.div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute"
  },
  content: {
    // border: "1px solid red",
    // display: "flex",
    width: "100%"
  }
};
export default Body;
