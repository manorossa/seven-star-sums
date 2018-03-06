import React from 'react';

    const Result = ({nextQ, rightWrong}) => {
        return (
            <div className='container'>
                <div>
                    {rightWrong ? 
                    'Yay, you got the sum right! You get another star!'
                    : 'Unlucky! That\'s the wrong answer. Try another sum.' }
                </div>
                <button onClick={nextQ}>Next question</button>
            </div>
        )
    }

export default Result;