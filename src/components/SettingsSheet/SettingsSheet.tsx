import React from 'react';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';

const SettingsSheet: React.FC = () => {
  const modifiers = 'horizontal';
  return (
    <div className="sheet--settings">
      <h3>What type of sums do you want to play today?</h3>
      <div className="settings__button-container">
        <Button type="button" handler={() => alert('pairs')} modifiers={modifiers}>
          Number pairs
        </Button>
        <Button type="button" handler={() => alert('tables')} modifiers={modifiers}>
          Times tables
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
