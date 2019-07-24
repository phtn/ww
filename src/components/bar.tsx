import React, { FC, useContext } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { UIContext } from "../context/ui-context";
import { motion } from "framer-motion";

const Bar: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  return (
    <motion.div>
      <Navbar
        style={{
          backgroundColor: nightmode ? `rgb(16,27,38)` : `rgb(0,153,229)`
        }}
      >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Button>Wallace Water</Button>
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button
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
export default Bar;
