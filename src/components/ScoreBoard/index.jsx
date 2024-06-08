import { useState } from "react";
import "./styles.css";

export default function ScoreBoard() {
  const [counter, setCounter] = useState(0);

  const shoot = () => {
    setCounter(() => counter + 1);
  };

  return (
    <div className="score">
      <h1 onClick={() => shoot}>Shooting Panda</h1>
      <p>
        Puntaje: <span>{counter}</span>
      </p>
    </div>
  );
}
