import React from 'react';
import Answer from './answer';
import './Answers.css'

    const Answers = ({answers, clicked}) => {
        let answerMap = answers.map( ( answer, index ) => {
            return <Answer
                key={index}
                value={answer}
                clicked={() => clicked(answer)} />
          } );

        return (
            <div className='answer-strip'>
                <div className='container answer-container'>
                    <div><h4 className='white-text'>Choose an answer:</h4></div>
                    {answerMap}
                </div>
            </div>
        )
    }

export default Answers;