import { useContext } from "react";

import ScoreContext from "../../context/ScoreContext";

import "./styles.css";

export default function ScoreBoard() {
  const { score } = useContext(ScoreContext);

  return (
    <div className="score">
      <h1>Shooting Panda</h1>
      <p>
        Puntaje: <span>{score}</span>
      </p>
    </div>
  );
}
