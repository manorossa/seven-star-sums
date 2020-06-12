import React from 'react';

interface AnswerProps extends React.HTMLAttributes<HTMLButtonElement> {
    value: number;
    clicked(): void; 
}

const Answer: React.FC<AnswerProps> = ({value, clicked}) => {
    return (
        <button className='round-button round-large' onClick={clicked}>
            {value}
        </button>
    )
};

export default Answer;