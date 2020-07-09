import React, { ReactNode, useState, useMemo, useContext } from 'react';
import { GameStates } from '../types/types';

type StatusContextProps = {
  gameStatus: GameStates;
  startGameHandler?(): void;
  resetGameHandler?(): void;
  showSettingsHandler?(): void;
};

type Props = { children: ReactNode };

const StatusContext = React.createContext<Partial<StatusContextProps>>({ gameStatus: 'showSettings' });
const { Provider } = StatusContext;

const StatusProvider = ({ children }: Props): JSX.Element => {
  const [gameStatus, setGameStatus] = useState('showSettings' as GameStates);

  const statusContextValues = useMemo(() => ({ gameStatus, setGameStatus }), [gameStatus]);

  return <Provider value={statusContextValues}>{children}</Provider>;
};

const useStatus = (): StatusContextProps => {
  const { gameStatus } = useContext(StatusContext);

  if (gameStatus === undefined) {
    throw new Error('useStatus must be used within a StatusProvider');
  }

  return { gameStatus };
};

export { StatusProvider, useStatus };
