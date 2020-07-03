import React, { useContext } from 'react';
import Star from '../../UI/atoms/Icons/Star';
import Heart from '../../UI/atoms/Icons/Heart';
import './Score.css';
import AnswerContext from '../../context/AnswerContext';
import ScoreContext from '../../context/ScoreContext';

const Score: React.FC = () => {
  const { score } = useContext(AnswerContext);
  const { totalLives, livesLeft } = useContext(ScoreContext);
  const stars = [];
  if (score !== undefined) {
    for (let i = 1; i <= 7; i++) {
      stars.push(
        <Star key={`star-${i}`} fill={i <= score ? '#fff100' : '#ccc'} stroke={i <= score ? '#ff9b00' : '#888'} />
      );
    }
  }

  const hearts = [];
  if (totalLives && livesLeft) {
    for (let j = 1; j <= totalLives; j++) {
      hearts.push(<Heart key={`heart-${j}`} fill={j <= livesLeft ? '#e74c3c' : '#220277'} />);
    }
  }

  return (
    <div className="score-strip">
      <div className="container score-container">
        <div>
          <h4 className="white-text">Your score is:</h4>
        </div>
        <div className="icon-container">{stars}</div>
      </div>
      <div className="container score-container no-top-padding">
        <h4 className="lightest-text">{`You have ${livesLeft} lives left.`}</h4>
        <div className="icon-container">{hearts}</div>
      </div>
    </div>
  );
};

export default Score;
