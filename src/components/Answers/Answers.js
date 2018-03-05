import React from 'react';
import Answer from './answer';

    const Answers = ({answers, clicked}) => {
        let answerMap = answers.map( ( answer, index ) => {
            return <Answer
                key={index}
                value={answer}
                clicked={() => clicked(answer)} />
          } );

        return (
            <div className='container'>
                <div>Choose an answer</div>
                {answerMap}
            </div>
        )
    }

export default Answers;