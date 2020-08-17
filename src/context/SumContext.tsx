import React, { useState, useMemo, useContext } from 'react';
import { SumState, Props } from '../types/types';

const SumContext = React.createContext<Partial<SumState>>({});
const { Provider } = SumContext;

const SumProvider = ({ children }: Props): JSX.Element => {
  const [sumType, setSumType] = useState('bonds' as SumState['sumType']);
  const [possibleNums, setPossibleNums] = useState([] as SumState['possibleNums']);
  const [num1, setNum1] = useState(null as SumState['num1']);
  const [num2, setNum2] = useState('?' as SumState['num2']);
  const [baseNum, setBaseNum] = useState(20);
  const [op1, setOp1] = useState('+' as SumState['op1']);
  const [rightWrong, setRightWrong] = useState(null as SumState['rightWrong']);

  const sumState = useMemo(
    () => ({
      sumType,
      possibleNums,
      num1,
      num2,
      baseNum,
      op1,
      rightWrong,
      setSumType,
      setPossibleNums,
      setNum1,
      setNum2,
      setBaseNum,
      setOp1,
      setRightWrong
    }),
    [sumType, possibleNums, num1, num2, baseNum, op1, rightWrong]
  );

  return <Provider value={sumState}>{children}</Provider>;
};

const useSum = (): SumState => {
  const {
    sumType,
    possibleNums,
    num1,
    num2,
    baseNum,
    op1,
    rightWrong,
    setSumType,
    setPossibleNums,
    setNum1,
    setNum2,
    setBaseNum,
    setOp1,
    setRightWrong
  } = useContext(SumContext);

  if (
    sumType === undefined ||
    possibleNums === undefined ||
    num1 === undefined ||
    num2 === undefined ||
    baseNum === undefined ||
    op1 === undefined ||
    rightWrong === undefined ||
    setSumType === undefined ||
    setPossibleNums === undefined ||
    setNum1 === undefined ||
    setNum2 === undefined ||
    setBaseNum === undefined ||
    setOp1 === undefined ||
    setRightWrong === undefined
  ) {
    throw new Error('useSum must be used within a SumProvider');
  }

  return {
    sumType,
    possibleNums,
    num1,
    num2,
    baseNum,
    op1,
    rightWrong,
    setSumType,
    setPossibleNums,
    setNum1,
    setNum2,
    setBaseNum,
    setOp1,
    setRightWrong
  };
};

export { SumProvider, useSum };
