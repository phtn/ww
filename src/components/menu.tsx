import React, { FC, useContext } from "react";
import { Button, Intent, Menu, Popover, Position } from "@blueprintjs/core";
import { UIContext } from "../context/ui-context";

const MenuTitle = () => (
  <span style={{ fontWeight: 700 }}>Sign in with Google</span>
);

const MenuList: FC = () => {
  return (
    <Menu>
      <Menu.Item icon="person" text={<MenuTitle />} intent={Intent.SUCCESS} />
      <Menu.Divider />
      <Menu.Item icon="info-sign" text="About Us" intent={Intent.PRIMARY} />
    </Menu>
  );
};
const MenuPanel: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode } = state;

  return (
    <Popover position={Position.BOTTOM_LEFT} content={<MenuList />}>
      <Button
        intent={nightmode ? Intent.NONE : Intent.PRIMARY}
        onClick={() => console.log("menu")}
        className="bp3-minimal"
        icon="menu"
        text=""
      />
    </Popover>
  );
};
export default MenuPanel;
