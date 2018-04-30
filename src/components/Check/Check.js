import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import '../Answers/Answers.css'

    const Check = ({yesClicked, noClicked, gameStatus}) => {
        let show = gameStatus === 'confirmAnswer' ? true : false ;

        return (
            <CSSTransition 
                mountOnEnter 
                unmountOnExit 
                in={show} 
                timeout={1200}
                classNames="height-anim">
                <div className='container answer-container'>
                    <div><h4 className='white-text'>Are you sure?</h4></div>
                    <button className='horizontal-button' onClick={yesClicked}>Yes</button>
                    <button className='horizontal-button' onClick={noClicked}>No</button>
                </div>
            </CSSTransition>
        )
    }

export default Check;