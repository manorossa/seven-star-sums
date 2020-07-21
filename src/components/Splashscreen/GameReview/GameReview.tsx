import React from 'react';
import { useScore } from '../../../context/ScoreContext';
import { useSum } from '../../../context/SumContext';
import { answerMethod } from '../../../helpers/helpers';

const GameReview: React.FC = () => {
  const { totalLives, livesLeft, score, wrongAnswers } = useScore();
  const { baseNum, op1 } = useSum();

  const lostLives = totalLives - livesLeft;

  const pluralStars = score === 1 ? '' : 's';
  const pluralLives = lostLives === 1 ? 'life' : 'lives';

  const finalScore = `You got ${score} star${pluralStars}.`;
  const finalLives = `You lost ${lostLives} ${pluralLives}.`;

  const didLoseLives = lostLives > 0;

  const wrongSums = didLoseLives
    ? wrongAnswers.map((obj) => {
        const missingNum = answerMethod[op1](baseNum, obj.correctAnswer as number);
        const sum =
          op1 === '+'
            ? `${missingNum} + ${obj.correctAnswer} = ${baseNum}`
            : `${missingNum} x ${baseNum} = ${obj.correctAnswer}`;

        return (
          <div>
            <p>
              <strong>{sum}</strong>
            </p>
            <p>
              You answered&nbsp;
              <strong>{obj.playerAnswer}</strong>
              .&nbsp; The correct answer was&nbsp;
              <strong>{obj.correctAnswer}</strong>
            </p>
          </div>
        );
      })
    : null;

  return (
    <div>
      <h4>Let&rsquo;s review your game...</h4>
      <p>
        <strong>{finalScore}</strong>
      </p>
      <p>
        <strong>{finalLives}</strong>
      </p>
      {didLoseLives && <p>These are the sums you didn&rsquo;t get right:</p>}
      {wrongSums}
    </div>
  );
};

export default GameReview;
