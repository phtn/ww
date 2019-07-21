import React, { FC, useContext } from "react";
import { Frame } from "framer";
import { UIContext } from "../context/ui-context";
import { Slider } from "./slider";

const Body: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode } = state;
  return (
    <Frame
      initial={{ backgroundColor: `rgb(21,32,43)` }}
      animate={{
        top: 0,
        opacity: 1,
        // background={{ alpha: 1, angle: 75, start: "#09F", end: "#F09" }}
        backgroundColor: nightmode ? `rgb(23,34,45)` : `rgb(250,250,250)`,
        color: nightmode ? `rgb(250,250,250)` : `rgb(23,34,45)`
      }}
      style={styles.container}
    >
      <div style={styles.content}>
        <Slider />
      </div>
    </Frame>
  );
};
const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(21,32,43)",
    display: "flex",
    justifyContent: "center"

    // backgroundColor: "rgb(16,27,38)"
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
};
export default Body;
