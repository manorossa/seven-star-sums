import React from 'react';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';
import { SettingsPayload } from '../../types/types';

interface SettingsSheetProps {
  handleSettings(payload: SettingsPayload): void;
}

const SettingsSheet: React.FC<SettingsSheetProps> = ({ handleSettings }) => {
  const horizButtons = 'horizontal';
  const smallRoundButtons = ['round', 'round-small'];
  return (
    <div className="sheet--settings">
      <div className="settings__panel settings__panel--1">
        <h3>What type of sums do you want to play today?</h3>
        <div className="settings__button-container">
          <Button
            type="button"
            handler={(): void => handleSettings({ baseNum: 20, operator: '+' })}
            modifiers={horizButtons}
          >
            Number pairs
          </Button>
          <Button
            type="button"
            handler={(): void => handleSettings({ baseNum: 3, operator: 'x' })}
            modifiers={horizButtons}
          >
            Times tables
          </Button>
        </div>
      </div>
      <div className="settings__panel settings__panel--1">
        <h3>Choose your times tables:</h3>
        <div className="settings__button-container">
          <Button type="button" handler={(): void => alert('2')} modifiers={smallRoundButtons}>
            2
          </Button>
          <Button type="button" handler={(): void => alert('3')} modifiers={smallRoundButtons}>
            3
          </Button>
          <Button type="button" handler={(): void => alert('4')} modifiers={smallRoundButtons}>
            4
          </Button>
          <Button type="button" handler={(): void => alert('5')} modifiers={smallRoundButtons}>
            5
          </Button>
          <Button type="button" handler={(): void => alert('8')} modifiers={smallRoundButtons}>
            8
          </Button>
          <Button type="button" handler={(): void => alert('10')} modifiers={smallRoundButtons}>
            10
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSheet;
