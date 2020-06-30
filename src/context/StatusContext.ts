import React from 'react';
import { GameStates } from '../types/types';

type StatusContextProps = {
  gameStatus: GameStates;
};

const StatusContext = React.createContext<StatusContextProps>({ gameStatus: 'showSettings' });

export default StatusContext;
