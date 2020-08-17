import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc, SumState } from '../../../types/types';

interface Panel2Props {
  stateChecker: SumState['op1'];
  handler: GenericFunc<SumState['op1']>;
  status: number;
  isBonds: boolean;
}

const SettingsPanel1: React.FC<Panel2Props> = ({ stateChecker, handler, status, isBonds }) => {
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
    <div className={`settings__panel settings__panel--1 settings__panel--${panel2viz}`}>
      {isBonds ? (
        <>
          <h3>Do you want to do adding or taking away?</h3>
          <div className="settings__button-container">{bondOperatorMap}</div>
        </>
      ) : (
        <>
          <h3>Do you want to do multiplication or division?</h3>
          <div className="settings__button-container">{tableOperatorMap}</div>
        </>
      )}
    </div>
  );
};

export default SettingsPanel1;
