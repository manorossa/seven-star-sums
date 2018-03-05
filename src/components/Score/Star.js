import React from 'react';

const Star = ({fill, stroke}) => {
    return (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 429.34 409.35">
        <path d="M214.67 327.95l-119.85 73.2c-7.9 4.83-12.61 1.41-10.46-7.59l32.59-136.61-106.66-91.36c-7-6-5.23-11.55 4-12.29l140-11.23 53.87-129.66c3.56-8.55 9.38-8.55 12.93 0l53.97 129.66 140 11.23c9.23.74 11 6.27 4 12.29l-106.67 91.36 32.58 136.61c2.15 9-2.55 12.42-10.45 7.59z" 
        fill={fill} 
        stroke={stroke} 
        strokeLinejoin="round" 
        strokeWidth="12"/>
        </svg>
    )
};

export default Star;