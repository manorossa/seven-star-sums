import React, { ReactNode, useState, useMemo, useContext } from 'react';
import { GameStates, AppState } from '../types/types';

type StatusContextProps = {
  gameStatus: GameStates;
  showSplash: AppState['showSplash'];
  setGameStatus: React.Dispatch<React.SetStateAction<GameStates>>;
  setShowSplash: React.Dispatch<React.SetStateAction<AppState['showSplash']>>;
  startGameHandler?(): void;
  resetGameHandler?(): void;
  showSettingsHandler?(): void;
};

type Props = { children: ReactNode };

const StatusContext = React.createContext<Partial<StatusContextProps>>({ gameStatus: 'showSettings' });
const { Provider } = StatusContext;

const StatusProvider = ({ children }: Props): JSX.Element => {
  const [gameStatus, setGameStatus] = useState('showSettings' as GameStates);
  const [showSplash, setShowSplash] = useState(false);

  const statusContextValues = useMemo(() => ({ gameStatus, showSplash, setGameStatus, setShowSplash }), [
    gameStatus,
    showSplash
  ]);

  return <Provider value={statusContextValues}>{children}</Provider>;
};

const useStatus = (): StatusContextProps => {
  const { gameStatus, showSplash, setGameStatus, setShowSplash } = useContext(StatusContext);

  if (
    gameStatus === undefined ||
    showSplash === undefined ||
    setGameStatus === undefined ||
    setShowSplash === undefined
  ) {
    throw new Error('useStatus must be used within a StatusProvider');
  }

  return { gameStatus, showSplash, setGameStatus, setShowSplash };
};

export { StatusProvider, useStatus };
