import React, { useState } from 'react';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';
import { SettingsPayload } from '../../types/types';

interface SettingsSheetProps {
  handleSettings(payload: SettingsPayload): void;
}

const SettingsSheet: React.FC<SettingsSheetProps> = ({ handleSettings }) => {
  const [settingStatus, setSettingStatus] = useState(1);
  const [operator, setOperator] = useState('+' as SettingsPayload['operator']);
  const [baseNum, setBaseNum] = useState(2);

  const pairs = operator === '+';
  const horizButtons = 'horizontal';
  const smallRoundButtons = ['round', 'round-small'];
  const tableOptions = [2, 3, 4, 5, 8, 10];
  const pairOptions = [10, 20];

  const buttonMap = (options: number[]): JSX.Element[] =>
    options.map(
      (option): JSX.Element => {
        return (
          <Button type="button" handler={(): void => setBaseNum(option)} modifiers={smallRoundButtons}>
            {option}
          </Button>
        );
      }
    );

  const pairMap = buttonMap(pairOptions);
  const tableMap = buttonMap(tableOptions);

  // PANEL HANDLERS START
  const panel1Handler = (chosenOperator: SettingsPayload['operator']): void => {
    setSettingStatus(2);
    setOperator(chosenOperator);
  };

  return (
    <div className="sheet--settings">
      <div className="settings__panel settings__panel--1">
        <h3>What type of sums do you want to play today?</h3>
        <div className="settings__button-container">
          <Button type="button" handler={(): void => panel1Handler('+')} modifiers={horizButtons}>
            Number pairs
          </Button>
          <Button type="button" handler={(): void => panel1Handler('x')} modifiers={horizButtons}>
            Times tables
          </Button>
        </div>
      </div>
      {settingStatus > 1 && (
        <div className="settings__panel settings__panel--2">
          {!!pairs && (
            <>
              <h3>Choose your number pair:</h3>
              <div className="settings__button-container settings__button-container--small">{pairMap}</div>
            </>
          )}
          {!pairs && (
            <>
              <h3>Choose your times tables:</h3>
              <div className="settings__button-container">{tableMap}</div>
              <p>
                Base number is:
                {baseNum}
              </p>
            </>
          )}
        </div>
      )}
      <div className="settings__panel settings__panel--4">
        <Button type="button" handler={(): void => handleSettings({ baseNum, operator })} modifiers={horizButtons}>
          Start the sums!
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
