import React from 'react';

    const Splashscreen = ({startgame, resetgame, status}) => {
        let splash = '';
        switch (status) {
            case 'startGame':
                splash = <button onClick={startgame}>Start the Sums!</button>
                break;
            case 'endWin':
                splash =    <div>
                            <p>Well done! You&rsquo;ve got seven stars!</p>
                            <button onClick={resetgame}>Play again!</button>
                            </div>
                break;
            case 'endLose':
                splash =    <div>
                            <p>Unlucky! You&rsquo;ve run out lives...</p>
                            <button onClick={resetgame}>Try again!</button>
                            </div>
                break;
            default:
                splash = <p>Please refresh the page.</p>
          }
        return (
            <div className='container'>
                <h1>Seven Star Sums</h1>
                {splash}
            </div>
        )
    }

export default Splashscreen;