import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc, SumState } from '../../../types/types';

interface PanelOpProps {
  stateChecker: SumState['op1'];
  handler: GenericFunc<SumState['op1']>;
  status: number;
  isBonds: boolean;
}

const SettingsPanelOp: React.FC<PanelOpProps> = ({ stateChecker, handler, status, isBonds }) => {
  // BUTTON CONTENT
  const bondOperatorOptions = ['+', '-'];
  const bondOperatorOptionsText = ['Adding (+)', 'Taking away (-)'];
  const tableOperatorOptions = ['x', '÷'];
  const tableOperatorOptionsText = ['Multiplication (x)', 'Division (÷)'];

  // BUTTON MAP
  const bondOperatorMap = buttonMap(
    bondOperatorOptions,
    stateChecker,
    2,
    handler,
    makeButtonStyles(buttonStyles.horiz),
    bondOperatorOptionsText,
    status
  );
  const tableOperatorMap = buttonMap(
    tableOperatorOptions,
    stateChecker,
    2,
    handler,
    makeButtonStyles(buttonStyles.horiz),
    tableOperatorOptionsText,
    status
  );

  // PANEL VISIBILITY OPTIONS
  const panel2viz = status > 1 ? 'show' : 'hide';

  return (
    <div className={`settings__panel settings__panel--${panel2viz}`}>
      {isBonds ? (
        <>
          <h3>Do you want to do adding or taking away?</h3>
          <div className="settings__button-container settings__button-container--lge">{bondOperatorMap}</div>
        </>
      ) : (
        <>
          <h3>Do you want to do multiplication or division?</h3>
          <div className="settings__button-container settings__button-container--lge">{tableOperatorMap}</div>
        </>
      )}
    </div>
  );
};

export default SettingsPanelOp;
