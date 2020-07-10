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

export interface AppState {
  showSplash: boolean;
  gameStatus: GameStates;
  possibleNums: number[];
  baseNum: number;
  num1: number | null;
  num2: AnswerButton;
  op1: string;
  op2: string;
  possibleAns: number[];
  correctAns: number | null;
  rightWrong: boolean | null;
  score: number;
  totalLives: number;
  livesLeft: number;
}

export interface OldAppState {
  showSplash: boolean;
  gameStatus: GameStates;
  possibleNums: number[];
  baseNum: number;
  num1: number | null;
  num2: AnswerButton;
  op1: string;
  op2: string;
  correctAns: number | null;
  rightWrong: boolean | null;
}

interface AnswerMethod {
  (a: number, b: number): number;
}

export interface AnswerMethodsObj {
  [key: string]: AnswerMethod;
}

export interface SettingsPayload {
  finalBaseNum: number;
  finalOperator: '+' | 'x';
}

// @to-do: look into generics to get round use of any here
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export type GenericFunc = (arg0: any) => void;
