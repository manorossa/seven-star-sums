import React from 'react';
import '../Answers/Answers.css';
import './Result.css';

    const Result = ({nextQ, rightWrong}) => {
        let borderStyle = rightWrong ? 'green-border' : 'red-border';

        return (
            <div className={`answer-strip ${borderStyle}`}>
                <div className='container answer-container'>
                    <div className='result-container'>
                        <h4 className='white-text'>
                        {rightWrong ? 
                        'Yay, you got the sum right! Have another star!'
                        : 'Unlucky! That\'s the wrong answer. Try another sum.' }
                        </h4>
                    </div>
                    <button className='horizontal-button' onClick={nextQ}>Next question</button>
                </div>
            </div>
        )
    }

export default Result;