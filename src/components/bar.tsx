import React, { FC, useContext } from "react";
import { Navbar, Button, Alignment, Intent } from "@blueprintjs/core";
import { UIContext } from "../context/ui-context";
import { motion } from "framer-motion";

// COMPONENTS
import MenuBar from "./menu";

const Bar: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, WIDTH } = state;
  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  return (
    <motion.div
      animate={{
        backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`,
        color: nightmode ? "#ccc" : "#555",
        width: WIDTH
      }}
    >
      <Navbar style={{ backgroundColor: "transparent" }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading
            // className="bp3-heading"
            style={Object.assign({}, styles.brand, {
              color: nightmode ? "#5C7080" : "rgba(250,250,250, 0.80)"
            })}
          >
            Wallace Water
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            intent={nightmode ? Intent.NONE : Intent.PRIMARY}
            onClick={toggleNightmode}
            className="bp3-minimal"
            icon={nightmode ? "full-circle" : "moon"}
            text=""
          />

          <Navbar.Divider />
          <MenuBar />
        </Navbar.Group>
      </Navbar>
    </motion.div>
  );
};
const styles = {
  brand: {
    fontFamily: "Playfair Display, serif",
    fontSize: "18px",
    color: "#eee",
    backgroundColor: "transparent",
    letterSpacing: 1
    // border: "1px solid red"
  }
};
export default Bar;
