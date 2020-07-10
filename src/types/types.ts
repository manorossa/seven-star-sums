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
