import React, { useContext } from 'react';
import Answer from './Answer/Answer';
import './Answers.css';
import withAnimation from '../../HOCs/withAnimation/withAnimation';
import StatusContext from '../../context/StatusContext';
import { useAnswer } from '../../context/AnswerContext';

const Answers: React.FC = () => {
  const { possibleAns, answerClickHandler } = useAnswer();
  const answerMap =
    possibleAns &&
    answerClickHandler &&
    possibleAns.map(
      (answer): JSX.Element => {
        return <Answer key={`answer-${answer}`} value={answer} clicked={(): void => answerClickHandler(answer)} />;
      }
    );

  const { gameStatus } = useContext(StatusContext);
  const order = gameStatus === 'showSum' ? '1' : '4';

  return (
    <div className={`container answer-container flex-order--${order}`}>
      <div>
        <h4 className="white-text">Choose an answer:</h4>
      </div>
      {answerMap}
    </div>
  );
};

export default withAnimation(Answers, 'showSum');
