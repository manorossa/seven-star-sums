import React from 'react';
import Answer from './Answer/Answer';
import './Answers.css'
import withAnimation from '../../HOCs/withAnimation/withAnimation';

interface AnswersProps {
    answers: number[];
    clicked(answer: number): void;
    gameStatus: string; 
}

const Answers: React.FC<AnswersProps> = ({answers, clicked, gameStatus}) => {
    let answerMap = answers.map( ( answer, index ) => {
        return <Answer
            key={index}
            value={answer}
            clicked={() => clicked(answer)} />
        } );

    let order = gameStatus === 'showSum' ? 'flex-order--1' : 'flex-order--4' ;

    return (
        <div className={`container answer-container ${order}`}>
            <div><h4 className='white-text'>Choose an answer:</h4></div>
            {answerMap}
        </div>
    )
}

export default withAnimation(Answers, 'showSum');