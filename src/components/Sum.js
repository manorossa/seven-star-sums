import React from 'react';

    const Sum = (props) => {
        return (
            <div className='container'>
                <div>Num 1</div>
                <div>{props.op1}</div>
                <div>Num 2</div>
                <div>{props.op2}</div>
                <div>{props.num3}</div>
            </div>
        )
    }

export default Sum;