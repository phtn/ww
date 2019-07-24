import React, { FC, useContext } from "react";
import { Card, Button, Elevation } from "@blueprintjs/core";
import { motion } from "framer-motion";
import { UIContext } from "../context/ui-context";
// import { Slider } from "./slider";

const Body: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode, menuVisibility } = state;
  return (
    <motion.div
      style={Object.assign({}, styles.container, {
        backgroundColor: nightmode ? "rgb(16,27,38)" : "white"
        // visibility: 'hidden'
      })}
    >
      <Card interactive={false} elevation={Elevation.ONE}>
        <h5>
          <a href="#">LOGIN</a>
        </h5>
        {/* <p>with Google</p> */}
        <Button intent="primary">with Google</Button>
      </Card>
    </motion.div>
  );
};

const styles = {
  container: {
    // height: "100%",

    // visibility: "hidden", // display: "flex",
    // justifyContent: "center"
    // backgroundColor: "rgb(16,27,38)",
    padding: 25
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
};
export default Body;
