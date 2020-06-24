import React, { useState } from 'react';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';
import { SettingsPayload } from '../../types/types';

interface SettingsSheetProps {
  handleSettings(payload: SettingsPayload): void;
}

const SettingsSheet: React.FC<SettingsSheetProps> = ({ handleSettings }) => {
  const [operator, setOperator] = useState('+' as SettingsPayload['operator']);
  const [baseNum, setBaseNum] = useState(2);

  const pairs = operator === '+';
  const horizButtons = 'horizontal';
  const smallRoundButtons = ['round', 'round-small'];
  return (
    <div className="sheet--settings">
      <div className="settings__panel settings__panel--1">
        <h3>What type of sums do you want to play today?</h3>
        <div className="settings__button-container">
          <Button type="button" handler={(): void => setOperator('+')} modifiers={horizButtons}>
            Number pairs
          </Button>
          <Button type="button" handler={(): void => setOperator('x')} modifiers={horizButtons}>
            Times tables
          </Button>
        </div>
      </div>
      <div className="settings__panel settings__panel--2">
        {!!pairs && (
          <>
            <h3>Choose your number pair:</h3>
            <div className="settings__button-container">
              <Button type="button" handler={() => setBaseNum(10)} modifiers={smallRoundButtons}>
                10
              </Button>
              <Button type="button" handler={() => setBaseNum(20)} modifiers={smallRoundButtons}>
                20
              </Button>
            </div>
          </>
        )}
        {!pairs && (
          <>
            <h3>Choose your times tables:</h3>
            <div className="settings__button-container">
              <Button type="button" handler={() => setBaseNum(2)} modifiers={smallRoundButtons}>
                2
              </Button>
              <Button type="button" handler={() => setBaseNum(3)} modifiers={smallRoundButtons}>
                3
              </Button>
              <Button type="button" handler={() => setBaseNum(4)} modifiers={smallRoundButtons}>
                4
              </Button>
              <Button type="button" handler={() => setBaseNum(5)} modifiers={smallRoundButtons}>
                5
              </Button>
              <Button type="button" handler={() => setBaseNum(8)} modifiers={smallRoundButtons}>
                8
              </Button>
              <Button type="button" handler={() => setBaseNum(10)} modifiers={smallRoundButtons}>
                10
              </Button>
            </div>
            <p>
              Base number is:
              {baseNum}
            </p>
          </>
        )}
      </div>
      <div className="settings__panel settings__panel--4">
        <Button type="button" handler={(): void => handleSettings({ baseNum, operator })} modifiers={horizButtons}>
          Start the sums!
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
