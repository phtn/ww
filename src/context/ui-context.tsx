import React, { FC, createContext, ReactNode, useState } from "react";
import initialState from "./initialState";

const UIContext: any = createContext([{}, () => {}]);

type UIProps = {
  children: ReactNode;
};

const UIProvider: FC<UIProps> = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <UIContext.Provider value={[state, setState]}>
      {children}
    </UIContext.Provider>
  );
};

export { UIContext, UIProvider };
