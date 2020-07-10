import React, { useEffect } from 'react';
import Sum from '../Sum/Sum';
import Answers from '../Answers/Answers';
import Check from '../Check/Check';
import Result from '../Result/Result';
import Score from '../Score/Score';
import { useStatus } from '../../context/StatusContext';
import { useSum } from '../../context/SumContext';
import { useAnswer } from '../../context/AnswerContext';
import { useScore } from '../../context/ScoreContext';
import { definePossibleNums, defineSum } from '../../helpers/helpers';

const GameSheet: React.FC = () => {
  const { gameStatus, setGameStatus } = useStatus();
  const { baseNum, op1, possibleNums, setNum1, setNum2, setPossibleNums, setRightWrong } = useSum();
  const { setPossibleAns, setCorrectAns } = useAnswer();
  const { setScore } = useScore();

  const resetGameStatus = gameStatus === 'resetGame';
  const startGameStatus = gameStatus === 'startGame';
  const defineSumStatus = gameStatus === 'defineSum';

  useEffect(() => {
    if (resetGameStatus) {
      setPossibleNums([]);
      setRightWrong(null);
      setScore(0);
      setGameStatus('startGame');
    }
  }, [resetGameStatus, setPossibleNums, setRightWrong, setScore, setGameStatus]);

  useEffect(() => {
    if (startGameStatus) {
      const newNums = definePossibleNums(baseNum, op1);
      setPossibleNums([...possibleNums].concat(newNums));
      setGameStatus('defineSum');
    }
  }, [startGameStatus, setGameStatus, baseNum, op1, possibleNums, setPossibleNums]);

  useEffect(() => {
    if (defineSumStatus) {
      const newSum = defineSum(possibleNums, baseNum, op1);
      setNum1(newSum.randomNum);
      setNum2('?');
      setPossibleNums([...possibleNums].filter((val) => val !== newSum.randomNum));
      setPossibleAns(newSum.possibleAns);
      setCorrectAns(newSum.answer1);
      setGameStatus('showSum');
    }
  }, [
    defineSumStatus,
    setGameStatus,
    baseNum,
    op1,
    possibleNums,
    setCorrectAns,
    setNum1,
    setNum2,
    setPossibleAns,
    setPossibleNums
  ]);

  return (
    <div className="game__sheet">
      <Sum />
      <div className="answer-strip">
        <Answers />
        <Check />
        <Result />
      </div>
      <Score />
    </div>
  );
};

export default GameSheet;
