import { useContext } from "react";

import ScoreContext from "../../context/ScoreContext";

import "./styles.css";

export default function Panda({ pandaProperties }) {
  const { incrementScore } = useContext(ScoreContext);

  return (
    <div
      className={`panda-container ${pandaProperties.name}`}
      onClick={incrementScore}
    >
      <span className="ears left-ear"></span>
      <span className="ears right-ear"></span>
      <div className="head">
        <span className="eyes eye-left eyes-animation"></span>
        <span className="eyes eye-right eyes-animation"></span>
        <span className="nose"></span>
      </div>
    </div>
  );
}
