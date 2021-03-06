import React from 'react';

const Heart = ({fill}) => {
    return (
        <span className="heart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 432">
            <path d="M343.5 153.7c-2.8 7.2-6 14.8-10.4 22.8-1.6 2.8-9.2 16.4-11.6 20.4-10 16-56 72.5-58.4 75.3l-.4.4c-16.4 18-35.2 38-57.2 59.2-2 2-4 3.6-6 5.6l-5.2-5.2c-24.8-24-70.4-74.1-72.1-75.7-1.2-1.2-3.2-4-3.2-4-17.2-20.8-30.8-39.2-40.8-55.6-2.4-4-4.8-7.6-6.8-11.2-5.6-10-10-19.2-13.6-27.6-2.4-6.4-4.4-12.4-6-18-5.2-20-4.4-35.2-.4-46.8.4-1.6 1.2-3.2 1.6-4.8.4-.4.4-1.2.8-1.6 1.6-3.6 3.6-6.8 5.6-9.6 3.6-4.8 7.2-8.8 10.8-12 12-11.2 35.6-22 62-18 6 .8 12.4 2.8 18.4 5.6 15.2 6.8 30.4 19.2 44 40.4 2 2.8 3.6 5.6 5.2 8.8 2-3.6 4-6.8 6-9.6 42.8-66 102.1-47.2 123.7-27.2 4.8 4.4 10.4 10.4 14.8 18.4 1.6 2.8 2.8 6 4 9.6 0 .4.4.8.4 1.2.4 1.2.8 2 .8 3.2.4.8.4 1.6.8 2.8.4 1.6.8 3.2.8 5.2 1.6 12 0 28-7.6 48z" 
            fill={fill}/>
            </svg>
        </span>
    )
};

export default Heart;