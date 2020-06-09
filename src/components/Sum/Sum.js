import React from 'react';
import './Sum.css'

    const Sum = ({num1, num2, op1, op2, baseNum, rightWrong}) => {
        let borderColour
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