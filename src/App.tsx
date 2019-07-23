import React, { FC } from "react";
import { UIProvider } from "./context/ui-context";
// Blueprint stuff
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// Components
import Bar from "./components/bar";

const App: FC = () => {
  return (
    <UIProvider>
      {/* <Navbar /> */}
      <Bar />
      {/* <Body /> */}
    </UIProvider>
  );
};

export default App;
