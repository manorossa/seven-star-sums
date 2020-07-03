import React from 'react';
import { AppState } from '../types/types';

type ScoreContextProps = {
  totalLives: AppState['totalLives'];
  livesLeft: AppState['livesLeft'];
};

const ScoreContext = React.createContext<Partial<ScoreContextProps>>({});

export default ScoreContext;
