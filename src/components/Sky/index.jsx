import { useContext } from "react";

import ScoreContext from "../../context/ScoreContext";

import SunSticker from "../../assets/sun.png";
import MoonSticker from "../../assets/moon.png";
import "./styles.css";

export default function Sky() {
  const { resetScore } = useContext(ScoreContext);

  const skyElements = [
    {
      name: "sol",
      img: SunSticker,
    },
    {
      name: "luna",
      img: MoonSticker,
    },
  ];
  return (
    <div className="sky-container">
      <div className="sky sky__night">
        <img src={skyElements[1].img} alt={skyElements[1].name} />
      </div>
      <div className="sky sky__day sky-animation">
        <img
          src={skyElements[0].img}
          alt={skyElements[0].name}
          onClick={resetScore}
        />
      </div>
    </div>
  );
}
