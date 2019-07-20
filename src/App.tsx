import React, { FC } from "react";
import { UIProvider } from "./context/ui-context";

// Components
import Navbar from "./components/navbar";
import Body from "./components/body";

const App: FC = () => {
  return (
    <UIProvider>
      <Navbar />
      <Body />
    </UIProvider>
  );
};

export default App;
