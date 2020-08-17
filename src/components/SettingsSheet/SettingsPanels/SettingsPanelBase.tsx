import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc } from '../../../types/types';

interface PanelBaseProps {
  stateChecker: number;
  handler: GenericFunc<number>;
  status: number;
  isBonds: boolean;
}

const SettingsPanelBase: React.FC<PanelBaseProps> = ({ stateChecker, handler, status, isBonds }) => {
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
    <div className={`settings__panel settings__panel--${panel3viz}`}>
      {isBonds ? (
        <>
          <h3>Choose your bond number:</h3>
          <div className="settings__button-container settings__button-container--sml">{bondMap}</div>
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

export default SettingsPanelBase;
