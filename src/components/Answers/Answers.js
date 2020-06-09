import React from 'react';
import Answer from './answer';
import CSSTransition from "react-transition-group/CSSTransition";
import './Answers.css'

    const Answers = ({answers, clicked, gameStatus}) => {
        let answerMap = answers.map( ( answer, index ) => {
            return <Answer
                key={index}
                value={answer}
                clicked={() => clicked(answer)} />
          } );

        let show = gameStatus === 'showSum' ? true : false ;
        console.log(show);
        console.log(gameStatus);
        let order = gameStatus === 'showSum' ? 'flex-order--1' : 'flex-order--4' ;

        return (
            <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={show} 
            timeout={1200}
            classNames="height-anim">
                <div id='ANSWER' className={`container answer-container ${order}`}>
                    <div><h4 className='white-text'>Choose an answer:</h4></div>
                    {answerMap}
                </div>
            </CSSTransition>
        )
    }

export default Answers;