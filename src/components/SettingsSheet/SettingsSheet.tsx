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
  const [difficulty, setDifficulty] = useState(7);

  // PANEL HANDLERS START
  const panel1Handler = (chosenOperator: SettingsPayload['operator']): void => {
    setSettingStatus(2);
    setOperator(chosenOperator);
  };

  const panel2Handler = (chosenBaseNum: number): void => {
    setSettingStatus(3);
    setBaseNum(chosenBaseNum);
  };

  const panel3Handler = (lives: number): void => {
    setSettingStatus(4);
    setDifficulty(lives);
  };

  // PANEL VISIBILITY OPTIONS
  const panel2viz = settingStatus > 1 ? 'show' : 'hide';
  const panel3viz = settingStatus > 2 ? 'show' : 'hide';
  const panel4viz = settingStatus > 3 ? 'show' : 'hide';

  // RENDERING LOGIC
  const pairs = operator === '+';
  const horizButtons = 'horizontal';
  const horizGreenButtons = ['horizontal', 'horizontal-green'];
  const smallRoundButtons = ['round', 'round-small'];
  const tableOptions = [2, 3, 4, 5, 8, 10];
  const pairOptions = [10, 20];

  const buttonMap = (options: number[]): JSX.Element[] =>
    options.map(
      (option): JSX.Element => {
        return (
          <Button type="button" handler={(): void => panel2Handler(option)} modifiers={smallRoundButtons}>
            {option}
          </Button>
        );
      }
    );

  const pairMap = buttonMap(pairOptions);
  const tableMap = buttonMap(tableOptions);

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
      <div className={`settings__panel settings__panel--2 settings__panel--${panel2viz}`}>
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
          </>
        )}
      </div>
      <div className={`settings__panel settings__panel--3 settings__panel--${panel3viz}`}>
        <h3>How many lives do you want to have?</h3>
        <div className="settings__button-container">
          <Button type="button" handler={(): void => panel3Handler(7)} modifiers={horizButtons}>
            Medium: 7
          </Button>
          <Button type="button" handler={(): void => panel3Handler(5)} modifiers={horizButtons}>
            Hard: 5
          </Button>
          <Button type="button" handler={(): void => panel3Handler(3)} modifiers={horizButtons}>
            Very hard: 3
          </Button>
        </div>
      </div>
      <div className={`settings__panel settings__panel--2 settings__panel--${panel4viz}`}>
        <Button
          type="button"
          handler={(): void => handleSettings({ baseNum, operator, difficulty })}
          modifiers={horizGreenButtons}
        >
          Start the sums!
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
