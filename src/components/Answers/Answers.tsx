import React, { useContext } from 'react';
import Answer from './Answer/Answer';
import './Answers.css';
import withAnimation from '../../HOCs/withAnimation/withAnimation';
import { AppState } from '../../types/types';
import StatusContext from '../../context/StatusContext';

interface AnswersProps extends React.HTMLAttributes<HTMLDivElement> {
  answers: AppState['possibleAns'];
  clicked(answer: number): void;
}

const Answers: React.FC<AnswersProps> = ({ answers, clicked }) => {
  const answerMap = answers.map(
    (answer): JSX.Element => {
      return <Answer key={`answer-${answer}`} value={answer} clicked={(): void => clicked(answer)} />;
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
