import React, { useContext } from 'react';
import Button from '../../UI/atoms/Button/Button';
import '../Answers/Answers.css';
import withAnimation from '../../HOCs/withAnimation/withAnimation';
import AnswerContext from '../../context/AnswerContext';
import SumContext from '../../context/SumContext';
import { useScore } from '../../context/ScoreContext';

const Check: React.FC = (): JSX.Element => {
  const { noCheckHandler, yesCheckHandler, correctAns } = useContext(AnswerContext);
  const { num2 } = useContext(SumContext);
  const modifiers = 'horizontal';
  if (noCheckHandler === undefined || yesCheckHandler === undefined) {
    throw new Error('No handlers are defined');
  }
  const { setLivesLeft, setScore } = useScore();
  const yesButtonHandler = (): void => {
    yesCheckHandler();
    if (num2 !== correctAns) {
      setLivesLeft((prevLives) => prevLives - 1);
      return;
    }
    setScore((prevScore) => prevScore + 1);
  };
  return (
    <div className="container answer-container flex-order--3">
      <div>
        <h4 className="white-text">Are you sure?</h4>
      </div>
      <Button type="button" handler={yesButtonHandler} modifiers={modifiers}>
        Yes
      </Button>
      <Button type="button" handler={noCheckHandler} modifiers={modifiers}>
        No
      </Button>
    </div>
  );
};

export default withAnimation(Check, 'confirmAnswer');
