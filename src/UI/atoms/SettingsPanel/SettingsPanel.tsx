import React from 'react';
import { getCssClasses } from '../../../helpers/helpers';

interface PanelProps {
  title: string;
  buttonMap: JSX.Element[];
  panelModifiers?: string | string[];
  buttonModifiers?: string | string[];
}

const SettingsPanel: React.FC<PanelProps> = ({ title, buttonMap, panelModifiers, buttonModifiers }) => {
  const panelClasses = getCssClasses('settings__panel', panelModifiers);
  const buttonClasses = getCssClasses('settings__button-container', buttonModifiers);

  return (
    <div className={panelClasses}>
      <h3>{title}</h3>
      <div className={buttonClasses}>{buttonMap}</div>
    </div>
  );
};

export default SettingsPanel;
