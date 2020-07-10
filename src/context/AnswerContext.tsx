import React, { ReactNode, useState, useMemo, useContext } from 'react';
import { AppState } from '../types/types';

type AnswerContextProps = {
  possibleAns: AppState['possibleAns'];
  correctAns: AppState['correctAns'];
  setPossibleAns: React.Dispatch<React.SetStateAction<AppState['possibleAns']>>;
  setCorrectAns: React.Dispatch<React.SetStateAction<AppState['correctAns']>>;
};

type Props = { children: ReactNode };

const AnswerContext = React.createContext<Partial<AnswerContextProps>>({});
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

const useAnswer = (): AnswerContextProps => {
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
