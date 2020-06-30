import React, { useContext } from 'react';
import SettingsButton from '../SettingsButton/SettingsButton';
import './Header.css';
import StatusContext from '../../context/StatusContext';

interface HeaderProps {
  showSettings(): void;
}

const Header: React.FC<HeaderProps> = ({ showSettings }) => {
  const { gameStatus } = useContext(StatusContext);
  return (
    <div className="container header-container">
      <h1>SEVEN STAR SUMS</h1>
      {gameStatus !== 'showSettings' && <SettingsButton showSettings={showSettings} />}
    </div>
  );
};

export default Header;
