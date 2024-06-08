import { ScoreProvider } from "../context/ScoreContext";

import ScoreBoard from "../components/ScoreBoard";
import Panda from "../components/Panda";
import Sky from "../components/Sky";

import "./styles.css";
import FinishGame from "../components/FinishGame";

function App() {
  const pandaProperties = [
    {
      name: "panda-1",
    },
    {
      name: "panda-2",
    },
    {
      name: "panda-3",
    },
    {
      name: "panda-4",
    },
    {
      name: "panda-5",
    },
    {
      name: "panda-6",
    },
    {
      name: "panda-7",
    },
  ];

  return (
    <ScoreProvider>
      <div className="phone">
        <Sky />
        <ScoreBoard />
        <div className="mountain mountain-1"></div>
        <Panda pandaProperties={pandaProperties[0]} />
        <Panda pandaProperties={pandaProperties[1]} />
        <div className="mountain mountain-2"></div>
        <Panda pandaProperties={pandaProperties[2]} />
        <Panda pandaProperties={pandaProperties[3]} />
        <div className="mountain mountain-3"></div>
        <Panda pandaProperties={pandaProperties[4]} />
        <div className="mountain mountain-4"></div>
        <Panda pandaProperties={pandaProperties[5]} />
        <Panda pandaProperties={pandaProperties[6]} />
        <FinishGame />
      </div>
    </ScoreProvider>
  );
}

export default App;
