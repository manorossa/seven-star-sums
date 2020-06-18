import React, { Children } from 'react';
import './Button.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  modifier: string;
  handler(): void;
}

const Button: React.FC<ButtonProps> = ({ type, modifier, handler }) => {
  const CSSclass = `btn btn--${modifier}`;

  return (
    <button type={type} className={CSSclass} onClick={handler}>
      {Children}
    </button>
  );
};

export default Button;
