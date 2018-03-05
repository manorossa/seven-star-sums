import React from 'react';

    const Check = ({yesClicked, noClicked}) => {
        return (
            <div className='container'>
                <div>Are you sure?</div>
                <button onClick={yesClicked}>Yes</button>
                <button onClick={noClicked}>No</button>
            </div>
        )
    }

export default Check;