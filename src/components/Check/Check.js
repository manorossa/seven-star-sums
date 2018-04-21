import React from 'react';
import '../Answers/Answers.css'

    const Check = ({yesClicked, noClicked}) => {
        return (
            <div className='container answer-container'>
                <div><h4 className='white-text'>Are you sure?</h4></div>
                <button className='horizontal-button' onClick={yesClicked}>Yes</button>
                <button className='horizontal-button' onClick={noClicked}>No</button>
            </div>
        )
    }

export default Check;