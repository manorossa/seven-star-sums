import React from 'react';

    const Sum = ({num1, num2, op1, op2, baseNum}) => {
        return (
            <div className='container'>
                <div>{num1}</div>
                <div>{op1}</div>
                <div>{num2}</div>
                <div>{op2}</div>
                <div>{baseNum}</div>
            </div>
        )
    }

export default Sum;