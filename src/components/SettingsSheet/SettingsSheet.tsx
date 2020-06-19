import React from 'react';
import Button from '../../UI/atoms/Button/Button';

const SettingsSheet: React.FC = () => {
  const modifiers = 'horizontal';
  return (
    <div className="sheet--settings">
      <h3>What type of sums do you want to play today?</h3>
      <Button type="button" handler={() => alert('pairs')} modifiers={modifiers}>
        Number pairs
      </Button>
      <Button type="button" handler={() => alert('tables')} modifiers={modifiers}>
        Times tables
      </Button>
    </div>
  );
};

export default SettingsSheet;
