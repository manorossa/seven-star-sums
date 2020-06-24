import React from 'react';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';
import { SettingsPayload } from '../../types/types';

interface SettingsSheetProps {
  handleSettings(payload: SettingsPayload): void;
}

const SettingsSheet: React.FC<SettingsSheetProps> = ({ handleSettings }) => {
  const modifiers = 'horizontal';
  return (
    <div className="sheet--settings">
      <h3>What type of sums do you want to play today?</h3>
      <div className="settings__button-container">
        <Button
          type="button"
          handler={(): void => handleSettings({ baseNum: 20, operator: '+' })}
          modifiers={modifiers}
        >
          Number pairs
        </Button>
        <Button type="button" handler={(): void => handleSettings({ baseNum: 3, operator: 'x' })} modifiers={modifiers}>
          Times tables
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
