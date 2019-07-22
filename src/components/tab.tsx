import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { Frame } from "framer";

const Tab: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, btnFocus, WIDTH } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  function toggleButtonFocus() {
    setState((state: {}) => ({ ...state, btnFocus: !btnFocus }));
  }

  return (
    <Frame left={WIDTH * 0.83} style={styles.title}>
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
        }}
      >
        <span style={{ position: "relative" }}>{nightmode ? "🌘" : "🌒"}</span>
      </button>
    </Frame>
  );
};

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",
    width: 45,
    height: 45,
    backgroundColor: "transparent"
    // border: "1px solid tomato"
    // position: "absolute",
    // lineHeight: "50px",
  },
  button: {
    padding: 10,
    backgroundColor: "transparent",

    fontSize: 20,
    borderRadius: 20,
    position: "relative",
    outline: "none"
  }
};

export default Tab;
