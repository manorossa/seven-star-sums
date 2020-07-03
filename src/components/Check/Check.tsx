import React, { useContext } from 'react';
import Button from '../../UI/atoms/Button/Button';
import '../Answers/Answers.css';
import withAnimation from '../../HOCs/withAnimation/withAnimation';
import AnswerContext from '../../context/AnswerContext';

const Check: React.FC = (): JSX.Element => {
  const { noCheckHandler, yesCheckHandler } = useContext(AnswerContext);
  const modifiers = 'horizontal';
  if (noCheckHandler === undefined || yesCheckHandler === undefined) {
    throw new Error('No handlers are defined');
  }
  return (
    <div className="container answer-container flex-order--3">
      <div>
        <h4 className="white-text">Are you sure?</h4>
      </div>
      <Button type="button" handler={yesCheckHandler} modifiers={modifiers}>
        Yes
      </Button>
      <Button type="button" handler={noCheckHandler} modifiers={modifiers}>
        No
      </Button>
    </div>
  );
};

export default withAnimation(Check, 'confirmAnswer');
