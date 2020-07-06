import React, { useContext } from 'react';
import SettingsButton from '../SettingsButton/SettingsButton';
import './Header.css';
import StatusContext from '../../context/StatusContext';

const Header: React.FC = () => {
  const { gameStatus } = useContext(StatusContext);
  return (
    <div className="container header-container">
      <h1>SEVEN STAR SUMS</h1>
      {gameStatus !== 'showSettings' && <SettingsButton />}
    </div>
  );
};

export default Header;
