import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc, SumState } from '../../../types/types';

interface Panel1Props {
  stateChecker: SumState['sumType'];
  handler: GenericFunc<SumState['op1']>;
  status: number;
}

const SettingsPanel1: React.FC<Panel1Props> = ({ stateChecker, handler, status }) => {
  // BUTTON CONTENT
  const typeOptions = ['bonds', 'tables'];
  const typeText = ['Number bonds', 'Times tables'];

  // BUTTON MAP
  const typeMap = buttonMap(
    typeOptions,
    stateChecker,
    1,
    handler,
    makeButtonStyles(buttonStyles.horiz),
    typeText,
    status
  );

  return (
    <div className="settings__panel settings__panel--1">
      <h3>What type of sums do you want to play today?</h3>
      <div className="settings__button-container">{typeMap}</div>
    </div>
  );
};

export default SettingsPanel1;
