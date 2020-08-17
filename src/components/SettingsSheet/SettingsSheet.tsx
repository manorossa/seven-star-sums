import React, { useState, useEffect } from 'react';
import SettingsPanel1 from './SettingsPanels/SettingsPanel1';
import SettingsPanel2 from './SettingsPanels/SettingsPanel2';
import SettingsPanel3 from './SettingsPanels/SettingsPanel3';
import SettingsPanel4 from './SettingsPanels/SettingsPanel4';
import { buttonStyles } from './SettingsPanels/ButtonMapper';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';
import { GenericFunc, SumState } from '../../types/types';
import { useStatus } from '../../context/StatusContext';
import { useSum } from '../../context/SumContext';
import { useScore } from '../../context/ScoreContext';
import { getLocalSettings } from '../../helpers/helpers';

const SettingsSheet: React.FC = () => {
  // APP STATE FROM CONTEXT
  const { isLocalSettings, setGameStatus } = useStatus();
  const { setSumType, setBaseNum, setOp1 } = useSum();
  const { setTotalLives } = useScore();
  // LOCAL STATE IN COMPONENT
  const [settingStatus, setSettingStatus] = useState(1);
  const [panelSumType, setPanelSumType] = useState('bonds' as SumState['sumType']);
  const [operator, setOperator] = useState('+' as SumState['op1']);
  const [panelBaseNum, setPanelBaseNum] = useState(2);
  const [difficulty, setDifficulty] = useState(7);
  const [isResetType, setIsResetType] = useState(false);
  const [isResetOperator, setIsResetOperator] = useState(false);
  const localSettings = getLocalSettings();

  // IF SETTINGS HAVE ALREADY BEEN SET THEN SHOW ALL OPTIONS FROM START
  useEffect(() => {
    if (isLocalSettings && localSettings) {
      setSettingStatus(5);
      setOperator(localSettings.finalOperator);
      setPanelBaseNum(localSettings.finalBaseNum);
      setDifficulty(localSettings.finalDifficulty);
      setPanelSumType(localSettings.finalSumType);
    }
    // eslint-disable-next-line
  }, []);

  // PANEL HANDLERS
  const panel1Handler: GenericFunc<SumState['op1']> = (chosenType) => {
    if (isLocalSettings) {
      setPanelBaseNum(0);
      setIsResetType(true);
      setSettingStatus(5);
      setPanelSumType(chosenType as SumState['sumType']);
      return;
    }
    setSettingStatus(2);
    setPanelSumType(chosenType as SumState['sumType']);
  };

  const panel2Handler: GenericFunc<SumState['op1']> = (chosenOperator) => {
    if (!isLocalSettings) {
      setSettingStatus(3);
    }
    if (isResetType) {
      setIsResetOperator(true);
      setSettingStatus(5);
    }
    if (isResetType && panelBaseNum > 0) {
      setSettingStatus(6);
    }
    setOperator(chosenOperator as SumState['op1']);
  };

  const panel3Handler: GenericFunc<number> = (chosenBaseNum) => {
    if (!isLocalSettings) {
      setSettingStatus(4);
    }
    if (isResetOperator) {
      setSettingStatus(6);
    }
    setPanelBaseNum(chosenBaseNum);
  };

  const panel4Handler: GenericFunc<number> = (lives) => {
    setSettingStatus(5);
    if (isResetOperator) {
      setSettingStatus(6);
    }
    setDifficulty(lives);
  };

  const finalSettings = (
    finalSumType: SumState['sumType'],
    finalBaseNum: number,
    finalOperator: SumState['op1'],
    finalDifficulty: number
  ): void => {
    setSumType(finalSumType);
    setBaseNum(finalBaseNum);
    setOp1(finalOperator);
    setTotalLives(finalDifficulty);
    setGameStatus('resetGame');
    const allSettings = { finalSumType, finalBaseNum, finalOperator, finalDifficulty };
    window.localStorage.setItem('sevenStarSettings', JSON.stringify(allSettings));
  };

  // PANEL VISIBILITY OPTIONS
  const panel5viz = (settingStatus > 4 && !isResetType && !isResetOperator) || settingStatus > 5 ? 'show' : 'hide';

  // RENDERING LOGIC
  const bonds = panelSumType === 'bonds';

  return (
    <div className="settings__sheet">
      <SettingsPanel1 stateChecker={panelSumType} handler={panel1Handler} status={settingStatus} />
      <SettingsPanel2 stateChecker={operator} handler={panel2Handler} status={settingStatus} isBonds={bonds} />
      <SettingsPanel3 stateChecker={panelBaseNum} handler={panel3Handler} status={settingStatus} isBonds={bonds} />
      <SettingsPanel4
        stateChecker={difficulty}
        handler={panel4Handler}
        status={settingStatus}
        isResetOperator={isResetOperator}
      />
      <div className={`settings__panel settings__panel--2 settings__panel--${panel5viz}`}>
        <Button
          type="button"
          handler={(): void => finalSettings(panelSumType, panelBaseNum, operator, difficulty)}
          modifiers={buttonStyles.horizGreen}
        >
          Start the sums!
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
