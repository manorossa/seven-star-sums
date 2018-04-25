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

        return (
            <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={show} 
            timeout={800}
            classNames="height-anim">
                <div className='container answer-container'>
                    <div><h4 className='white-text'>Choose an answer:</h4></div>
                    {answerMap}
                </div>
            </CSSTransition>
        )
    }

export default Answers;