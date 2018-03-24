import React from 'react';
import Star from './Star';
import './Score.css';

    const Score = ({displayScore, livesLeft}) => {
        let stars = [];
        for (let i=1; i <= 7; i++) {
            stars.push(<Star
                key={i}
                fill={i <= displayScore ? '#fff100' : '#ccc'}
                stroke={i <= displayScore ? '#ff9b00' : '#888'}
                />)
        }
        return (
            <div className='score-strip'>
                <div className='container score-container'>
                    <div><h4 className='white-text'>Your score is:</h4></div>
                    <div>{stars}</div>
                </div>
                <div className='container score-container no-top-padding'>
                    <h4 className='lightest-text'>You have {livesLeft} questions left.</h4>
                </div>
            </div>
        )
    }

export default Score;