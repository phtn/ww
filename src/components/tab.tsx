import React, { FC, useContext } from "react";
import { UIContext } from "../context/ui-context";

const Tab: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { nightmode, count } = state;

  function toggleNightmode() {
    setState((state: {}) => ({ ...state, nightmode: !nightmode }));
  }

  return (
    <div style={styles.title}>
      <button
        style={Object.assign({}, styles.button, {
          color: nightmode ? "#eee" : "#333"
        })}
        onClick={() => {
          toggleNightmode();
          setState((state: {}) => ({ ...state, count: count + 250 }));
        }}
      >
        {nightmode ? "🌑" : "🌘"}
      </button>
    </div>
  );
};

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
    height: 48,
    color: "white",
    backgroundColor: "transparent",
    lineHeight: "50px"
  },
  button: {
    width: 100,
    border: "none",
    backgroundColor: "transparent",
    fontSize: 20
  }
};

export default Tab;
