import React from 'react';
import Sum from '../Sum/Sum';
import Answers from '../Answers/Answers';
import Check from '../Check/Check';
import Result from '../Result/Result';
import Score from '../Score/Score';
import { AnswerProvider } from '../../context/AnswerContext';

const GameSheet: React.FC = () => {
  return (
    <div className="game__sheet">
      <Sum />
      <AnswerProvider>
        <div className="answer-strip">
          <Answers />
          <Check />
          <Result />
        </div>
        <Score />
      </AnswerProvider>
    </div>
  );
};

export default GameSheet;
