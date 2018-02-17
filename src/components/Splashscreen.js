import React from 'react';

    const Splashscreen = ({startgame}) => {
        return (
            <div className='container'>
                <h1>Seven Star Sums</h1>
                <button onClick={startgame}>Start the Sums!</button>
            </div>
        )
    }

export default Splashscreen;