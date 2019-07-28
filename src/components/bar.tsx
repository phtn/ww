import React, { FC, useContext } from "react";
import { Navbar, Button, Alignment, Intent } from "@blueprintjs/core";
import { UIContext } from "../context/ui-context";
import { motion } from "framer-motion";

const Bar: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode } = state;
  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  return (
    <motion.div
      animate={{
        backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`,
        color: nightmode ? "#ccc" : "#555"
      }}
    >
      <Navbar style={{ backgroundColor: "transparent" }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading
            // className="bp3-heading"
            style={Object.assign({}, styles.brand, {
              color: nightmode ? "#5C7080" : "#fafafa"
            })}
          >
            Wallace Water
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            intent={Intent.PRIMARY}
            onClick={toggleNightmode}
            className="bp3-minimal"
            icon={nightmode ? "flash" : "moon"}
            text=""
          />
          <Navbar.Divider />
          <Button
            onClick={() => console.log("menu")}
            className="bp3-minimal"
            icon="menu"
            text=""
          />
        </Navbar.Group>
      </Navbar>
    </motion.div>
  );
};
const styles = {
  brand: {
    fontFamily: "Playfair Display, serif",
    fontSize: "20px",
    color: "#eee",
    backgroundColor: "transparent",
    letterSpacing: 1
    // border: "1px solid red"
  }
};
export default Bar;
