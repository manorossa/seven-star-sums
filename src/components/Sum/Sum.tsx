import React from 'react';
import './Sum.css'

interface SumProps {
    num1: number;
    num2: number | string;
    op1: string;
    op2: string;
    baseNum: number;
    rightWrong: boolean;
}

const Sum: React.FC<SumProps> = ({num1, num2, op1, op2, baseNum, rightWrong}) => {
    let borderColour: string
    if (rightWrong === null || num2 === '?') {
        borderColour = '';
    } else {
        borderColour = rightWrong ? 'border-green' : 'border-red';
    }
    return (
        <div className='container sum-container'>
            <div className='round-button round-large'>{num1}</div>
            <div className='round-button round-small'>{op1}</div>
            <div className={`round-button round-large ${borderColour}`}>{num2}</div>
            <div className='round-button round-small'>{op2}</div>
            <div className='round-button round-large'>{baseNum}</div>
        </div>
    )
}

export default Sum;