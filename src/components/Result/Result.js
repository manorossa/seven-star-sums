import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import '../Answers/Answers.css';
import './Result.css';

    const Result = ({nextQ, rightWrong, score, correctAns, gameStatus}) => {
        let borderStyle = rightWrong ? 'green-border' : 'red-border';
        let starNum = score === 1 ? 'a' : 'another';

        let show = gameStatus === 'showResult' ? true : false ;

        return (
            <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={show} 
            timeout={1200}
            classNames="height-anim">
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
            </CSSTransition>
        )
    }

export default Result;