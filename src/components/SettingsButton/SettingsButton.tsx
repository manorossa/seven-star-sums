import React, { useContext } from 'react';
import Button from '../../UI/atoms/Button/Button';
import StatusContext from '../../context/StatusContext';

const SettingsButton: React.FC = () => {
  const { showSettingsHandler } = useContext(StatusContext);
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
