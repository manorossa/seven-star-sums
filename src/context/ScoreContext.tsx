import React, { useState, ReactNode } from 'react';
import { AppState } from '../types/types';

type ScoreContextProps = {
  totalLives: AppState['totalLives'];
  livesLeft: AppState['livesLeft'];
  setTotalLives: React.Dispatch<React.SetStateAction<number>>;
  setLivesLeft: React.Dispatch<React.SetStateAction<number>>;
};

type Props = { children: ReactNode };
const [totalLives, setTotalLives] = useState(7);
const [livesLeft, setLivesLeft] = useState(7);

const scoreContextValues = {
  totalLives,
  livesLeft,
  setTotalLives,
  setLivesLeft
};

const ScoreContext = React.createContext<ScoreContextProps>(scoreContextValues);
const { Provider } = ScoreContext;

const ScoreProvider = ({ children }: Props): JSX.Element => {
  return <Provider value={scoreContextValues}>{children}</Provider>;
};

export { ScoreProvider, ScoreContext };
