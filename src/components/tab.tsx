import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";
import { Frame } from "framer";

type TabProps = {
  width?: number;
};

const Tab: FC<TabProps> = ({ width }) => {
  // const { width } = props;
  const [state, setState] = useContext(UIContext);
  const { nightmode, btnFocus, WIDTH } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  function toggleButtonFocus() {
    setState((state: {}) => ({ ...state, btnFocus: !btnFocus }));
  }

  return (
    <Frame left={WIDTH - 60} style={styles.title}>
      <button
        aria-label="night mode button"
        onFocus={() => toggleButtonFocus()}
        onBlur={() => toggleButtonFocus()}
        style={Object.assign({}, styles.button, {
          color: nightmode ? "#eee" : "#333",
          border: btnFocus
            ? `1px solid ${
                nightmode ? "rgba(204,204,204, 0.1)" : "rgba(204,204,204,1)"
              }`
            : "1px solid rgba(0,0,0,0.0)"
        })}
        onClick={() => {
          toggleNightmode();
        }}
      >
        <span style={{ position: "relative" }}>{nightmode ? "🌒" : "🌘"}</span>
      </button>
    </Frame>
  );
};

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  button: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    fontSize: 20,
    position: "relative",
    outline: "none",
    borderRadius: 50
  }
};

export default Tab;
