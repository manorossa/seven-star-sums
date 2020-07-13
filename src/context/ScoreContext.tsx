import React, { useState, useContext, useMemo } from 'react';
import { ScoreContextValues, Props } from '../types/types';

const ScoreContext = React.createContext<Partial<ScoreContextValues>>({});
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

const useScore = (): ScoreContextValues => {
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
