import React from 'react';
import '../Answers/Answers.css';
import './Result.css';

    const Result = ({nextQ, rightWrong, score, correctAns}) => {
        let borderStyle = rightWrong ? 'green-border' : 'red-border';
        let starNum = score === 1 ? 'a' : 'another';

        return (
            <div className={`container answer-container ${borderStyle}`}>
                <div className='result-container'>
                    <h4 className='white-text'>
                    {rightWrong ? 
                    `Yay, you got the sum right! Have ${starNum} star!`
                    : `Unlucky! The correct answer was ${correctAns}. You lose a life, but try again with another sum.` }
                    </h4>
                </div>
                <button className='horizontal-button' onClick={nextQ}>Next question</button>
            </div>
        )
    }

export default Result;