import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { Frame } from "framer";
import Tab from "./tab";

const Navbar: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode } = state;
  // console.log(state.count);
  return (
    <Frame // NAVBAR // backgroundColor: "rgb(16,27,38)"
      initial={{ top: -50, opacity: 0.2, backgroundColor: `rgb(21,32,43)` }}
      animate={{
        top: 0,
        opacity: 1,
        // background={{ alpha: 1, angle: 75, start: "#09F", end: "#F09" }}
        backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`
        // borderBottom: nightmode
        //   ? `0.5px solid gray`
        //   : `0.5px solid rgb(0,153,229)`
      }}
      style={styles.navbar}
    >
      <Tab />
      <Frame style={styles.divider} />
    </Frame>
  );
};

const styles = {
  navbar: {
    width: "100%",
    height: 50,
    zIndex: 1
  },
  divider: {
    height: 0.5,
    top: 50,
    width: "100%",
    opacity: 0.5
  }
};

export default Navbar;
