import React from 'react';
import './SettingsPanel.css';
import { getCssClasses } from '../../../helpers/helpers';

interface PanelProps {
  key?: string;
  title: string;
  buttonMap: JSX.Element[];
  panelModifiers?: string | string[];
  buttonModifiers?: string | string[];
}

const SettingsPanel: React.FC<PanelProps> = ({ key, title, buttonMap, panelModifiers, buttonModifiers }) => {
  const panelClasses = getCssClasses('settings__panel', panelModifiers);
  const buttonClasses = getCssClasses('settings__button-container', buttonModifiers);

  return (
    <div key={key} className={panelClasses}>
      <h3>{title}</h3>
      <div className={buttonClasses}>{buttonMap}</div>
    </div>
  );
};

export default SettingsPanel;
