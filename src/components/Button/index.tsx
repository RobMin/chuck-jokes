import React from 'react';
import './styles.scss';

interface ButtonProps {
  icon?: string;
  iconPosition?: 'right' | 'left';
  border?: string;
  backgroundColor?: string;
  color?: string;
  children: string;
  type?: 'regular' | 'big';
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  customClasses?: string;
}

const Button = ({ icon, iconPosition, border, backgroundColor, color, children, onClick, type, customClasses }: ButtonProps) => {
  const style: any = {};
  if (border) style.border = border;
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (color) style.color = color;

  const prefix = type === 'big' ? 'Big' : '';
  const iconImg = <img src={ icon } alt="button icon" className={ `${ prefix }Button-icon` } />;
  const iconPlaceholder = <span className="BigButton-icon" />;
  return (
     <button className={ `${ prefix }Button ${ customClasses || '' }` } onClick={ onClick } style={ style }>
      { iconPosition === 'left' ? iconImg : (type === 'big' && iconPlaceholder) }
      <span>{ children }</span>
      { iconPosition === 'right' ? iconImg : (type === 'big' && iconPlaceholder) }
    </button>
  );
};

export default Button;
