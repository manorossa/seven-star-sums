import React from 'react';
import Answer from './answer';
import './Answers.css'
import withAnimation from '../../HOCs/withAnimation/withAnimation';

    const Answers = ({answers, clicked, gameStatus}) => {
        let answerMap = answers.map( ( answer, index ) => {
            return <Answer
                key={index}
                value={answer}
                clicked={() => clicked(answer)} />
          } );

        let order = gameStatus === 'showSum' ? 'flex-order--1' : 'flex-order--4' ;

        return (
            <div id='ANSWER' className={`container answer-container ${order}`}>
                <div><h4 className='white-text'>Choose an answer:</h4></div>
                {answerMap}
            </div>
        )
    }

export default withAnimation(Answers, 'showSum');