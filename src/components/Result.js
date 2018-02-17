import React from 'react';

    const Result = (props) => {
        return (
            <div className='container'>
                <div>Result</div>
                <div>Tick</div>
                <div>Cross</div>
                <button onClick={props.nextQ}>Next question</button>
            </div>
        )
    }

export default Result;