import React, { useState, useMemo, useContext } from 'react';
import { AppState, AnswerContextValues, Props } from '../types/types';

const AnswerContext = React.createContext<Partial<AnswerContextValues>>({});
const { Provider } = AnswerContext;

const AnswerProvider = ({ children }: Props): JSX.Element => {
  const [possibleAns, setPossibleAns] = useState([] as number[]);
  const [correctAns, setCorrectAns] = useState(null as AppState['correctAns']);

  const answerContextValues = useMemo(() => ({ possibleAns, correctAns, setPossibleAns, setCorrectAns }), [
    possibleAns,
    correctAns
  ]);
  return <Provider value={answerContextValues}>{children}</Provider>;
};

const useAnswer = (): AnswerContextValues => {
  const { possibleAns, correctAns, setPossibleAns, setCorrectAns } = useContext(AnswerContext);

  if (
    possibleAns === undefined ||
    correctAns === undefined ||
    setPossibleAns === undefined ||
    setCorrectAns === undefined
  ) {
    throw new Error('useAnswer must be used within a AnswerProvider');
  }

  return { possibleAns, correctAns, setPossibleAns, setCorrectAns };
};

export { AnswerProvider, useAnswer };
