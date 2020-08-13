import React, { useState, useEffect } from 'react';
import Button from '../../UI/atoms/Button/Button';
import './SettingsSheet.css';
import { GenericFunc, OptionsMap, SumState } from '../../types/types';
import { useStatus } from '../../context/StatusContext';
import { useSum } from '../../context/SumContext';
import { useScore } from '../../context/ScoreContext';
import { getLocalSettings } from '../../helpers/helpers';

const SettingsSheet: React.FC = () => {
  const { isLocalSettings, setGameStatus } = useStatus();
  const { setSumType, setBaseNum, setOp1 } = useSum();
  const { setTotalLives } = useScore();
  const [settingStatus, setSettingStatus] = useState(1);
  const [panelSumType, setPanelSumType] = useState('bonds' as SumState['sumType']);
  const [operator, setOperator] = useState('+' as SumState['op1']);
  const [panelBaseNum, setPanelBaseNum] = useState(2);
  const [difficulty, setDifficulty] = useState(7);
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

  // PANEL HANDLERS START
  const panel1Handler: GenericFunc<SumState['op1']> = (chosenType) => {
    if (isLocalSettings) {
      setPanelBaseNum(0);
      setIsResetOperator(true);
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

  // PANEL VISIBILITY OPTIONS
  const panel2viz = settingStatus > 1 ? 'show' : 'hide';
  const panel3viz = settingStatus > 2 ? 'show' : 'hide';
  const panel4viz = settingStatus > 3 || isResetOperator ? 'show' : 'hide';
  const panel5viz = (settingStatus > 4 && !isResetOperator) || settingStatus > 5 ? 'show' : 'hide';

  // RENDERING LOGIC
  const bonds = panelSumType === 'bonds';

  // BUTTON STYLING
  const horizButtons = ['horizontal'];
  const horizGreenButtons = ['horizontal', 'horizontal-green'];
  const smallRoundButtons = ['round', 'round-small', 'round-white-border'];

  const makeButtonStyles = (array1: string[]): string[][] => {
    const array2 = [...array1];
    array2.push('active');
    const array3 = [...array1];
    array3.push('inactive');
    return [array1, array2, array3];
  };

  // BUTTON CONTENT
  const typeOptions = ['bonds', 'tables'];
  const typeText = ['Number bonds', 'Times tables'];
  const bondOperatorOptions = ['+', '-'];
  const tableOperatorOptions = ['x', '÷'];
  const tableOptions = [2, 3, 4, 5, 8, 10];
  const bondOptions = [10, 20];
  const difficultyOptions = [7, 5, 3];
  const difficultyText = ['Medium: 7', 'Hard: 5', ' Very hard: 3'];

  // CREATE BUTTON MAPS
  const buttonMap = (
    options: OptionsMap<string | number | SumState['op1'] | SumState['sumType']>,
    stateCheck: string | number,
    panelNum: number,
    clickHandler: GenericFunc<SumState['sumType'] & SumState['op1'] & number>,
    buttonStyle: string[][],
    buttonText: number[] | string[]
  ): JSX.Element[] =>
    options.map(
      (option: string | number | SumState['op1'] | SumState['sumType'], index: number): JSX.Element => {
        const [butMod, butModAct, butModInact] = buttonStyle;
        let buttonModifiers = butMod;
        if (settingStatus > panelNum && stateCheck) {
          buttonModifiers = option === stateCheck ? butModAct : butModInact;
        }
        return (
          <Button
            key={`panel-${panelNum}-${option}`}
            type="button"
            handler={(): void => clickHandler(option as SumState['sumType'] & SumState['op1'] & number)}
            modifiers={buttonModifiers}
          >
            {buttonText[index]}
          </Button>
        );
      }
    );

  const typeMap = buttonMap(typeOptions, panelSumType, 1, panel1Handler, makeButtonStyles(horizButtons), typeText);
  const bondOperatorMap = buttonMap(
    bondOperatorOptions,
    operator,
    2,
    panel2Handler,
    makeButtonStyles(horizButtons),
    bondOperatorOptions
  );
  const tableOperatorMap = buttonMap(
    tableOperatorOptions,
    operator,
    2,
    panel2Handler,
    makeButtonStyles(horizButtons),
    tableOperatorOptions
  );
  const bondMap = buttonMap(
    bondOptions,
    panelBaseNum,
    3,
    panel3Handler,
    makeButtonStyles(smallRoundButtons),
    bondOptions
  );
  const tableMap = buttonMap(
    tableOptions,
    panelBaseNum,
    3,
    panel3Handler,
    makeButtonStyles(smallRoundButtons),
    tableOptions
  );
  const difficultyMap = buttonMap(
    difficultyOptions,
    difficulty,
    4,
    panel4Handler,
    makeButtonStyles(horizButtons),
    difficultyText
  );

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

  return (
    <div className="settings__sheet">
      <div className="settings__panel settings__panel--1">
        <h3>What type of sums do you want to play today?</h3>
        <div className="settings__button-container">{typeMap}</div>
      </div>
      <div className={`settings__panel settings__panel--1 settings__panel--${panel2viz}`}>
        {bonds ? (
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
      <div className={`settings__panel settings__panel--2 settings__panel--${panel3viz}`}>
        {bonds ? (
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
      <div className={`settings__panel settings__panel--3 settings__panel--${panel4viz}`}>
        <h3>How many lives do you want to have?</h3>
        <div className="settings__button-container">{difficultyMap}</div>
      </div>
      <div className={`settings__panel settings__panel--2 settings__panel--${panel5viz}`}>
        <Button
          type="button"
          handler={(): void => finalSettings(panelSumType, panelBaseNum, operator, difficulty)}
          modifiers={horizGreenButtons}
        >
          Start the sums!
        </Button>
      </div>
    </div>
  );
};

export default SettingsSheet;
