import React from 'react';
import './styles.scss';

interface SingleJokeSectionProps {
  icon?: string;
  iconPosition?: 'right' | 'left';
  border?: string;
  backgroundColor?: string;
  color?: string;
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ icon, iconPosition, border, backgroundColor, color, children, onClick }: SingleJokeSectionProps) => {
  const style: any = {};
  if (border) style.border = border;
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (color) style.color = color;

  return (
    <button onClick={ onClick } className="Button" style={ style }>
      { iconPosition === 'left' && <img className="Button-icon" alt="button icon" src={ icon } /> }
      <span className="Button-text">{ children }</span>
      { iconPosition === 'right' && <img className="Button-icon" alt="button icon" src={ icon } /> }
    </button>
  );
};

export default Button;
