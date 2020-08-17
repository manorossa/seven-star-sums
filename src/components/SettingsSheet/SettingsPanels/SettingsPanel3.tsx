import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc } from '../../../types/types';

interface Panel2Props {
  stateChecker: number;
  handler: GenericFunc<number>;
  status: number;
  isBonds: boolean;
}

const SettingsPanel1: React.FC<Panel2Props> = ({ stateChecker, handler, status, isBonds }) => {
  // BUTTON CONTENT
  const tableOptions = [2, 3, 4, 5, 8, 10];
  const bondOptions = [10, 20];

  // BUTTON MAP
  const bondMap = buttonMap(
    bondOptions,
    stateChecker,
    3,
    handler,
    makeButtonStyles(buttonStyles.smallRound),
    bondOptions,
    status
  );
  const tableMap = buttonMap(
    tableOptions,
    stateChecker,
    3,
    handler,
    makeButtonStyles(buttonStyles.smallRound),
    tableOptions,
    status
  );

  // PANEL VISIBILITY OPTIONS
  const panel3viz = status > 2 ? 'show' : 'hide';

  return (
    <div className={`settings__panel settings__panel--2 settings__panel--${panel3viz}`}>
      {isBonds ? (
        <>
          <h3>Choose your bond number:</h3>
          <div className="settings__button-container settings__button-container--small">{bondMap}</div>
        </>
      ) : (
        <>
          <h3>Choose your times table:</h3>
          <div className="settings__button-container">{tableMap}</div>
        </>
      )}
    </div>
  );
};

export default SettingsPanel1;
