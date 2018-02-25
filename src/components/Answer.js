import React from 'react';

const Answer = ({value, clicked}) => {
    return (
        <button onClick={clicked}>
            {value}
        </button>
    )
};

export default Answer;