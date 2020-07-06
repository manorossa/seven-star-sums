import React from 'react';
import { AppState } from '../types/types';

type AnswerContextProps = {
  possibleAns: AppState['possibleAns'];
  answerClickHandler(value: number): void;
  noCheckHandler(): void;
  yesCheckHandler(): void;
  nextQuestionHandler(): void;
  score: AppState['score'];
  correctAns: AppState['correctAns'];
};

const AnswerContext = React.createContext<Partial<AnswerContextProps>>({});

export default AnswerContext;
