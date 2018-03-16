import React from 'react';
import './Splashscreen.css';

    const Splashscreen = ({startgame, resetgame, status}) => {
        let splash = '';
        switch (status) {
            case 'startGame':
                splash = <button className='horizontal-button' onClick={startgame}>Start the sums!</button>
                break;
            case 'endWin':
                splash =    <div>
                            <h3>Well done! You&rsquo;ve got seven stars!</h3>
                            <button className='horizontal-button' onClick={resetgame}>Play again!</button>
                            </div>
                break;
            case 'endLose':
                splash =    <div>
                            <h3>Unlucky! You&rsquo;ve run out lives...</h3>
                            <button className='horizontal-button' onClick={resetgame}>Try again!</button>
                            </div>
                break;
            default:
                splash = <h3>Please refresh the page.</h3>
          }
        return (
            <div className='screen'>
                <div className='splash'>
                    <h1>Seven Star Sums</h1>
                    {splash}
                </div>
            </div>
        )
    }

export default Splashscreen;