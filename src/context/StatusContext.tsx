import React, { useState, useMemo, useContext } from 'react';
import { GameStates, Props, StatusState } from '../types/types';

const StatusContext = React.createContext<Partial<StatusState>>({ gameStatus: 'showSettings' });
const { Provider } = StatusContext;

const StatusProvider = ({ children }: Props): JSX.Element => {
  const [gameStatus, setGameStatus] = useState('startGame' as GameStates);
  const [showSplash, setShowSplash] = useState(true);
  const [savedSettings, setSavedSettings] = useState(false);

  const statusState = useMemo(
    () => ({ gameStatus, showSplash, savedSettings, setGameStatus, setShowSplash, setSavedSettings }),
    [gameStatus, showSplash, savedSettings]
  );

  return <Provider value={statusState}>{children}</Provider>;
};

const useStatus = (): StatusState => {
  const { gameStatus, showSplash, savedSettings, setGameStatus, setShowSplash, setSavedSettings } = useContext(
    StatusContext
  );

  if (
    gameStatus === undefined ||
    showSplash === undefined ||
    savedSettings === undefined ||
    setGameStatus === undefined ||
    setShowSplash === undefined ||
    setSavedSettings === undefined
  ) {
    throw new Error('useStatus must be used within a StatusProvider');
  }

  return { gameStatus, showSplash, savedSettings, setGameStatus, setShowSplash, setSavedSettings };
};

export { StatusProvider, useStatus };
