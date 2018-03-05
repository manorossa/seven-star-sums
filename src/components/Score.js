import React from 'react';

    const Score = ({displayScore}) => {
        return (
            <div className='container'>
                <div>Your score is... {displayScore}</div>
            </div>
        )
    }

export default Score;