import React, { ReactNode, useState, useMemo, useContext } from 'react';
import { AppState, SettingsPayload } from '../types/types';

type SumContextProps = {
  num1: AppState['num1'];
  num2: AppState['num2'];
  baseNum: AppState['baseNum'];
  op1: AppState['op1'];
  op2: AppState['op2'];
  rightWrong: AppState['rightWrong'];
  settingsHandler?(payload: SettingsPayload): void;
  setNum1: React.Dispatch<React.SetStateAction<AppState['num1']>>;
  setNum2: React.Dispatch<React.SetStateAction<AppState['num2']>>;
  setBaseNum: React.Dispatch<React.SetStateAction<AppState['baseNum']>>;
  setOp1: React.Dispatch<React.SetStateAction<AppState['op1']>>;
  setOp2: React.Dispatch<React.SetStateAction<AppState['op2']>>;
  setRightWrong: React.Dispatch<React.SetStateAction<AppState['rightWrong']>>;
};

type Props = { children: ReactNode };

const SumContext = React.createContext<Partial<SumContextProps>>({});
const { Provider } = SumContext;

const SumProvider = ({ children }: Props): JSX.Element => {
  const [num1, setNum1] = useState(null as AppState['num1']);
  const [num2, setNum2] = useState('?' as AppState['num2']);
  const [baseNum, setBaseNum] = useState(20);
  const [op1, setOp1] = useState('+');
  const [op2, setOp2] = useState('=');
  const [rightWrong, setRightWrong] = useState(null as AppState['rightWrong']);

  const sumContextValues = useMemo(
    () => ({
      num1,
      num2,
      baseNum,
      op1,
      op2,
      rightWrong,
      setNum1,
      setNum2,
      setBaseNum,
      setOp1,
      setOp2,
      setRightWrong
    }),
    [num1, num2, baseNum, op1, op2, rightWrong]
  );

  return <Provider value={sumContextValues}>{children}</Provider>;
};

const useSum = (): SumContextProps => {
  const {
    num1,
    num2,
    baseNum,
    op1,
    op2,
    rightWrong,
    setNum1,
    setNum2,
    setBaseNum,
    setOp1,
    setOp2,
    setRightWrong
  } = useContext(SumContext);

  if (
    num1 === undefined ||
    num2 === undefined ||
    baseNum === undefined ||
    op1 === undefined ||
    op2 === undefined ||
    rightWrong === undefined ||
    setNum1 === undefined ||
    setNum2 === undefined ||
    setBaseNum === undefined ||
    setOp1 === undefined ||
    setOp2 === undefined ||
    setRightWrong === undefined
  ) {
    throw new Error('useSum must be used within a SumProvider');
  }

  return {
    num1,
    num2,
    baseNum,
    op1,
    op2,
    rightWrong,
    setNum1,
    setNum2,
    setBaseNum,
    setOp1,
    setOp2,
    setRightWrong
  };
};

export { SumProvider, useSum };
