import React, { FC, useContext, useEffect } from "react";
import { UIContext } from "../context/ui-context";
import { Frame } from "framer";
import Tab from "./tab";
import Brand from "./brand";

const Navbar: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, WIDTH } = state;

  useEffect(() => {
    const handleResize = () =>
      setState((state: {}) => ({
        ...state,
        WIDTH: window.innerWidth
      }));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Frame // NAVBAR // backgroundColor: "rgb(16,27,38)"
      initial={{ top: -50, opacity: 0.2, backgroundColor: `rgb(21,32,43)` }}
      animate={{
        top: 0,
        opacity: 1,
        backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`
      }}
      style={styles.navbar}
    >
      <Tab width={WIDTH} />
      <Brand width={WIDTH} />
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
