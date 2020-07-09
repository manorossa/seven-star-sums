import React from 'react';
import Button from '../../UI/atoms/Button/Button';
import { useStatus } from '../../context/StatusContext';

const SettingsButton: React.FC = () => {
  const { showSettingsHandler } = useStatus();
  const modifiers = ['horizontal', 'horizontal-small'];

  if (showSettingsHandler === undefined) {
    throw new Error('No handler is defined');
  }

  return (
    <Button type="button" handler={showSettingsHandler} modifiers={modifiers}>
      Change settings
    </Button>
  );
};

export default SettingsButton;
