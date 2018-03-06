import React from 'react';

const Answer = ({value, clicked}) => {
    return (
        <button className='round-button round-large' onClick={clicked}>
            {value}
        </button>
    )
};

export default Answer;