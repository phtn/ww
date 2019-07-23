import React, { FC, useContext } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { UIContext } from "../context/ui-context";

const Bar: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  return (
    <Navbar style={{}}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <Button>Wallace Water</Button>
        </Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button
          onClick={toggleNightmode}
          className="bp3-minimal"
          icon={nightmode ? "moon" : "flash"}
          text=""
        />
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="person" text="" />
      </Navbar.Group>
    </Navbar>
  );
};
export default Bar;
