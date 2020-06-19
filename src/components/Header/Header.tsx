import React from 'react';
import SettingsButton from './SettingsButton';
import './Header.css';

interface HeaderProps {
  showSettings(): void;
}

const Header: React.FC<HeaderProps> = ({ showSettings }) => {
  return (
    <div className="container header-container">
      <h1>SEVEN STAR SUMS</h1>
      <SettingsButton showSettings={showSettings} />
    </div>
  );
};

export default Header;
