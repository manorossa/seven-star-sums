import React from 'react';
import Star from './Star';

    const Score = ({displayScore}) => {
        let stars = [];
        for (let i=1; i <= 7; i++) {
            stars.push(<Star
                key={i}
                fill={i <= displayScore ? '#fff100' : '#ccc'}
                stroke={i <= displayScore ? '#ff9b00' : '#888'}
                />)
        }
        return (
            <div className='container'>
                <div>Your score is...</div>
                <div>{stars}</div>
            </div>
        )
    }

export default Score;