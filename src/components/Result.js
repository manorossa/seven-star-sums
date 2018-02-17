import React from 'react';

    const Result = ({nextQ}) => {
        return (
            <div className='container'>
                <div>Result</div>
                <div>Tick</div>
                <div>Cross</div>
                <button onClick={nextQ}>Next question</button>
            </div>
        )
    }

export default Result;