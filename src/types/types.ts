import { ReactNode } from 'react';

// CONTEXT AND STATE TYPES

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

export type Props = { children: ReactNode };
type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type AnswerContextValues = {
  possibleAns: number[];
  correctAns: number | null;
  setPossibleAns: StateSetter<AnswerContextValues['possibleAns']>;
  setCorrectAns: StateSetter<AnswerContextValues['correctAns']>;
};

export type ScoreContextValues = {
  totalLives: number;
  livesLeft: number;
  score: number;
  setTotalLives: StateSetter<ScoreContextValues['totalLives']>;
  setLivesLeft: StateSetter<ScoreContextValues['livesLeft']>;
  setScore: StateSetter<ScoreContextValues['score']>;
};

export type StatusContextValues = {
  gameStatus: GameStates;
  showSplash: boolean;
  setGameStatus: StateSetter<StatusContextValues['gameStatus']>;
  setShowSplash: StateSetter<StatusContextValues['showSplash']>;
};

export type SumContextValues = {
  possibleNums: number[];
  num1: number | null;
  num2: AnswerButton;
  baseNum: number;
  op1: Operator1;
  op2: string;
  rightWrong: boolean | null;
  setPossibleNums: StateSetter<SumContextValues['possibleNums']>;
  setNum1: StateSetter<SumContextValues['num1']>;
  setNum2: StateSetter<SumContextValues['num2']>;
  setBaseNum: StateSetter<SumContextValues['baseNum']>;
  setOp1: StateSetter<SumContextValues['op1']>;
  setOp2: StateSetter<SumContextValues['op2']>;
  setRightWrong: StateSetter<SumContextValues['rightWrong']>;
};

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
