import React from 'react';

    const Sum = (props) => {
        return (
            <div className='container'>
                <div>{props.num1}</div>
                <div>{props.op1}</div>
                <div>{props.num2}</div>
                <div>{props.op2}</div>
                <div>{props.num3}</div>
            </div>
        )
    }

export default Sum;