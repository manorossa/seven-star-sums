import React, { useState, ReactNode, useContext, useMemo } from 'react';
import { AppState } from '../types/types';

type ScoreContextProps = {
  totalLives: AppState['totalLives'];
  livesLeft: AppState['livesLeft'];
  setTotalLives: React.Dispatch<React.SetStateAction<number>>;
  setLivesLeft: React.Dispatch<React.SetStateAction<number>>;
};

type Props = { children: ReactNode };

const ScoreContext = React.createContext<Partial<ScoreContextProps>>({});
const { Provider } = ScoreContext;

const ScoreProvider = ({ children }: Props): JSX.Element => {
  const [totalLives, setTotalLives] = useState(7);
  const [livesLeft, setLivesLeft] = useState(7);

  const scoreContextValues = useMemo(
    () => ({
      totalLives,
      livesLeft,
      setTotalLives,
      setLivesLeft
    }),
    [totalLives, livesLeft]
  );
  return <Provider value={scoreContextValues}>{children}</Provider>;
};

const useScore = (): ScoreContextProps => {
  const context = useContext(ScoreContext);
  const { totalLives, livesLeft, setTotalLives, setLivesLeft } = context;

  if (
    totalLives === undefined ||
    livesLeft === undefined ||
    setTotalLives === undefined ||
    setLivesLeft === undefined
  ) {
    throw new Error('useScore must be used within a ScoreProvider');
  }

  return {
    totalLives,
    livesLeft,
    setTotalLives,
    setLivesLeft
  };
};

export { ScoreProvider, useScore, ScoreContext };
