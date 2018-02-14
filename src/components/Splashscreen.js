import React from 'react';

    const Splashscreen = (props) => {
        return (
            <div className='container'>
                <h1>Seven Star Sums</h1>
                <button onClick={props.startgame}>Start the Sums!</button>
            </div>
        )
    }

export default Splashscreen;