import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import GameSheet from '../GameSheet/GameSheet';
import SettingsSheet from '../SettingsSheet/SettingsSheet';
import Splashscreen from '../Splashscreen/Splashscreen';
import { useStatus } from '../../context/StatusContext';
import { SumProvider } from '../../context/SumContext';
import { ScoreProvider } from '../../context/ScoreContext';
import { AnswerProvider } from '../../context/AnswerContext';

const App: React.FC = () => {
  const { gameStatus, showSplash, setGameStatus, setShowSplash, setSavedSettings } = useStatus();

  useEffect(() => {
    if (window.localStorage.getItem('sevenStarSettings') !== null) {
      setSavedSettings(true);
      return;
    }
    setShowSplash(false);
    setGameStatus('showSettings');
  });

  return (
    <div className="App">
      <SumProvider>
        <ScoreProvider>
          {showSplash && <Splashscreen />}
          <Header />

          <div className="stage">
            {gameStatus === 'showSettings' ? (
              <SettingsSheet />
            ) : (
              <AnswerProvider>
                <GameSheet />
              </AnswerProvider>
            )}
          </div>
        </ScoreProvider>
      </SumProvider>
    </div>
  );
};

export default App;
