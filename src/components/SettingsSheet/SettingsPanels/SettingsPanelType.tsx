import React from 'react';
import { buttonStyles, makeButtonStyles, buttonMap } from './ButtonMapper';
import { GenericFunc, SumState } from '../../../types/types';

interface PanelTypeProps {
  stateChecker: SumState['sumType'];
  handler: GenericFunc<SumState['sumType']>;
  status: number;
}

const SettingsPanelType: React.FC<PanelTypeProps> = ({ stateChecker, handler, status }) => {
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
    <div className="settings__panel">
      <h3>What type of sums do you want to play today?</h3>
      <div className="settings__button-container settings__button-container--lge">{typeMap}</div>
    </div>
  );
};

export default SettingsPanelType;
