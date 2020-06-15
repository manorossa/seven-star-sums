import React from 'react';
import '../Answers/Answers.css';
import withAnimation from '../../HOCs/withAnimation/withAnimation';

interface CheckProps extends React.HTMLAttributes<HTMLDivElement> {
  yesClicked(): void;
  noClicked(): void;
}

const Check: React.FC<CheckProps> = ({ yesClicked, noClicked }) => {
  return (
    <div className="container answer-container flex-order--3">
      <div>
        <h4 className="white-text">Are you sure?</h4>
      </div>
      <button className="horizontal-button" onClick={yesClicked}>
        Yes
      </button>
      <button className="horizontal-button" onClick={noClicked}>
        No
      </button>
    </div>
  );
};

export default withAnimation(Check, 'confirmAnswer');
