import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { Frame } from "framer";

const Tab: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, count } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  return (
    <Frame style={styles.title}>
      <button
        style={Object.assign({}, styles.button, {
          color: nightmode ? "#eee" : "#333"
        })}
        onClick={() => {
          toggleNightmode();
          setState((state: {}) => ({ ...state, count: count + 250 }));
        }}
      >
        {nightmode ? "🌘" : "🌑"}
      </button>
    </Frame>
  );
};

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
    height: 35,
    color: "white",
    backgroundColor: "transparent",
    lineHeight: "50px",
    top: 15
  },
  button: {
    width: "auto",
    border: `3px solid rgba(204,204,204, 0.2)`,
    backgroundColor: "transparent",
    fontSize: 20,
    borderRadius: 15
  }
};

export default Tab;
