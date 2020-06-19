import React from 'react';
import Button from '../../UI/atoms/Button/Button';
import './Header.css';

interface SettingsButtonProps {
  showSettings(): void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ showSettings }) => {
  const modifiers = ['horizontal', 'horizontal-small'];
  return (
    <Button type="button" handler={showSettings} modifiers={modifiers}>
      Settings
    </Button>
  );
};

export default SettingsButton;
