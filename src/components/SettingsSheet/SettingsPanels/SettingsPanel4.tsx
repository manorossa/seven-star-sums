import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc } from '../../../types/types';

interface Panel4Props {
  stateChecker: number;
  handler: GenericFunc<number>;
  status: number;
  isResetOperator: boolean;
}

const SettingsPanel1: React.FC<Panel4Props> = ({ stateChecker, handler, status, isResetOperator }) => {
  // BUTTON CONTENT
  const difficultyOptions = [7, 5, 3];
  const difficultyText = ['Medium: 7', 'Hard: 5', ' Very hard: 3'];

  // BUTTON MAP
  const difficultyMap = buttonMap(
    difficultyOptions,
    stateChecker,
    4,
    handler,
    makeButtonStyles(buttonStyles.horiz),
    difficultyText,
    status
  );

  // PANEL VISIBILITY OPTIONS
  const panel4viz = status > 3 || isResetOperator ? 'show' : 'hide';

  return (
    <div className={`settings__panel settings__panel--3 settings__panel--${panel4viz}`}>
      <h3>How many lives do you want to have?</h3>
      <div className="settings__button-container">{difficultyMap}</div>
    </div>
  );
};

export default SettingsPanel1;
