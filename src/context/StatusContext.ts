import React from 'react';
import { GameStates } from '../types/types';

type StatusContextProps = {
  gameStatus: GameStates;
  startGameHandler(): void;
  resetGameHandler(): void;
  showSettingsHandler(): void;
};

const StatusContext = React.createContext<Partial<StatusContextProps>>({ gameStatus: 'showSettings' });

export default StatusContext;
