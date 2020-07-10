import { ReactNode } from 'react';

export type GameStates =
  | 'startGame'
  | 'showSettings'
  | 'defineSum'
  | 'resetGame'
  | 'showSum'
  | 'confirmAnswer'
  | 'showResult'
  | 'endWin'
  | 'endLose';

type AnswerButton = number | '?';
type Operator1 = '+' | 'x';

export interface AppState {
  showSplash: boolean;
  gameStatus: GameStates;
  possibleNums: number[];
  baseNum: number;
  num1: number | null;
  num2: AnswerButton;
  op1: Operator1;
  op2: string;
  possibleAns: number[];
  correctAns: number | null;
  rightWrong: boolean | null;
  score: number;
  totalLives: number;
  livesLeft: number;
}

interface AnswerMethod {
  (a: number, b: number): number;
}

export interface AnswerMethodsObj {
  [key: string]: AnswerMethod;
}

export interface SettingsPayload {
  finalBaseNum: number;
  finalOperator: Operator1;
}

// @to-do: look into generics to get round use of any here
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export type GenericFunc = (arg0: any) => void;

export interface DefineSumResult {
  randomNum: AppState['num1'];
  possibleAns: AppState['possibleAns'];
  answer1: AppState['correctAns'];
}

// CONTEXT TYPES
export type Props = { children: ReactNode };

export type AnswerContextValues = {
  possibleAns: AppState['possibleAns'];
  correctAns: AppState['correctAns'];
  setPossibleAns: React.Dispatch<React.SetStateAction<AppState['possibleAns']>>;
  setCorrectAns: React.Dispatch<React.SetStateAction<AppState['correctAns']>>;
};

export type StatusContextValues = {
  gameStatus: GameStates;
  showSplash: AppState['showSplash'];
  setGameStatus: React.Dispatch<React.SetStateAction<GameStates>>;
  setShowSplash: React.Dispatch<React.SetStateAction<AppState['showSplash']>>;
};

export type SumContextValues = {
  possibleNums: AppState['possibleNums'];
  num1: AppState['num1'];
  num2: AppState['num2'];
  baseNum: AppState['baseNum'];
  op1: AppState['op1'];
  op2: AppState['op2'];
  rightWrong: AppState['rightWrong'];
  setPossibleNums: React.Dispatch<React.SetStateAction<AppState['possibleNums']>>;
  setNum1: React.Dispatch<React.SetStateAction<AppState['num1']>>;
  setNum2: React.Dispatch<React.SetStateAction<AppState['num2']>>;
  setBaseNum: React.Dispatch<React.SetStateAction<AppState['baseNum']>>;
  setOp1: React.Dispatch<React.SetStateAction<AppState['op1']>>;
  setOp2: React.Dispatch<React.SetStateAction<AppState['op2']>>;
  setRightWrong: React.Dispatch<React.SetStateAction<AppState['rightWrong']>>;
};

export type ScoreContextValues = {
  totalLives: AppState['totalLives'];
  livesLeft: AppState['livesLeft'];
  score: AppState['score'];
  setTotalLives: React.Dispatch<React.SetStateAction<number>>;
  setLivesLeft: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
