import React, { FC, useContext } from "react";
import { Button, Intent, Menu, Popover, Position } from "@blueprintjs/core";
import { UIContext } from "../context/ui-context";
import Firebase, { googleProvider } from "../firebase";

const MenuTitle = () => (
  <span style={{ fontWeight: 700 }}>Sign in with Google</span>
);

type MenuListProps = {
  googleSignIn: any;
};

const MenuList: FC<MenuListProps> = props => {
  const { googleSignIn } = props;
  return (
    <Menu>
      <Menu.Item icon="person" text={<MenuTitle />} intent={Intent.SUCCESS} />
      <Menu.Divider />
      <Button onClick={googleSignIn}>
        <Menu.Item icon="info-sign" text="About Us" intent={Intent.PRIMARY} />
      </Button>
    </Menu>
  );
};
const MenuPanel: FC = () => {
  const [state] = useContext(UIContext);
  const { nightmode } = state;

  const signInWithGoogle = () => {
    Firebase.auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        if (result.user) {
          window.console.log(result.user.uid);
        }
      });
  };

  return (
    <Popover
      position={Position.BOTTOM_LEFT}
      content={<MenuList googleSignIn={signInWithGoogle} />}
    >
      <Button
        intent={nightmode ? Intent.NONE : Intent.PRIMARY}
        onClick={() => console.log("menu clicked.")}
        className="bp3-minimal"
        icon="menu"
        text=""
      />
    </Popover>
  );
};
export default MenuPanel;
