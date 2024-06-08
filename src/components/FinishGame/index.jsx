import { useContext, useEffect } from "react";

import ScoreContext from "../../context/ScoreContext";

import "./styles.css";

export default function FinishGame() {
  const { open, setOpen, playAgain, score } = useContext(ScoreContext);

  const maxScore = 20;

  useEffect(() => {
    if (score === maxScore) {
      setOpen(true);
    }
  }, [score]);

  return (
    <div
      className={`modal-container ${
        open === true ? "modal-open" : "modal-close"
      }`}
    >
      <section className="modal">
        <p className="modal__text text--title">¡Se Busca!</p>
        <p className="modal__text text--subtitle">
          Por ser el cazador más peligroso de Pandas
        </p>
        <button onClick={playAgain}>Juga de nuevo</button>
      </section>
    </div>
  );
}
