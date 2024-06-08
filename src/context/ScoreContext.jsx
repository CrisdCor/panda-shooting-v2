import { useState, createContext } from "react";

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);

  const incrementScore = () => {
    setScore(() => score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const playAgain = () => {
    setOpen(false);
    setScore(0);
  };

  return (
    <ScoreContext.Provider
      value={{ score, open, setOpen, incrementScore, resetScore, playAgain }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
