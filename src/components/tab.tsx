import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { Frame } from "framer";

const Tab: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, count, btnFocus } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  function toggleButtonFocus() {
    setState((state: {}) => ({ ...state, btnFocus: !btnFocus }));
  }

  return (
    <Frame style={styles.title}>
      <button
        onFocus={() => toggleButtonFocus()}
        onBlur={() => toggleButtonFocus()}
        style={Object.assign({}, styles.button, {
          color: nightmode ? "#eee" : "#333",
          border: btnFocus
            ? `1px solid rgba(204,204,204, 0.2)`
            : "1px solid rgba(0,0,0,0.0)"
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
    height: 36,
    color: "white",
    backgroundColor: "transparent",
    // lineHeight: "50px",
    top: 7
  },
  button: {
    width: 36,

    padding: 5,
    backgroundColor: "transparent",
    fontSize: 18,
    borderRadius: 20,
    position: "relative",
    outline: "none"
  }
};

export default Tab;
