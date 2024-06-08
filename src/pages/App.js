import Panda from "../components/Panda";
import ScoreBoard from "../components/ScoreBoard";

import "./styles.css";

function App() {
  return (
    <div className="phone">
      <ScoreBoard />
      <Panda />
      <div className="mountain-1"></div>
      <div className="mountain-2"></div>
      <div className="mountain-3"></div>
      <div className="mountain-4"></div>
    </div>
  );
}

export default App;
