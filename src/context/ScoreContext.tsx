import React, { useState, ReactNode, useContext, useMemo } from 'react';
import { AppState } from '../types/types';

type ScoreContextProps = {
  totalLives: AppState['totalLives'];
  livesLeft: AppState['livesLeft'];
  score: AppState['score'];
  setTotalLives: React.Dispatch<React.SetStateAction<number>>;
  setLivesLeft: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

type Props = { children: ReactNode };

const ScoreContext = React.createContext<Partial<ScoreContextProps>>({});
const { Provider } = ScoreContext;

const ScoreProvider = ({ children }: Props): JSX.Element => {
  const [totalLives, setTotalLives] = useState(7);
  const [livesLeft, setLivesLeft] = useState(7);
  const [score, setScore] = useState(0);

  const scoreContextValues = useMemo(
    () => ({
      totalLives,
      livesLeft,
      score,
      setTotalLives,
      setLivesLeft,
      setScore
    }),
    [totalLives, livesLeft, score]
  );
  return <Provider value={scoreContextValues}>{children}</Provider>;
};

const useScore = (): ScoreContextProps => {
  const { totalLives, livesLeft, score, setTotalLives, setLivesLeft, setScore } = useContext(ScoreContext);

  if (
    totalLives === undefined ||
    livesLeft === undefined ||
    score === undefined ||
    setTotalLives === undefined ||
    setLivesLeft === undefined ||
    setScore === undefined
  ) {
    throw new Error('useScore must be used within a ScoreProvider');
  }

  return {
    totalLives,
    livesLeft,
    score,
    setTotalLives,
    setLivesLeft,
    setScore
  };
};

export { ScoreProvider, useScore };
