import React from 'react';
import likeImg from 'assets/icons/like.svg';
import './styles.scss';

export type RateType = 'like' | 'dislike';
interface RateButtonsProps {
  likes: number;
  dislikes: number;
  onClick: (type: RateType) => void;
}

interface RateButtonProps {
  type: RateType;
  count: number;
  onClick: (type: RateType) => void;
}

const RateButton = ({ type, count, onClick }: RateButtonProps) => {
  return (
    <span className={ `RateButton ${ type }` }>
      <button className="RateButton-icon-wrapper" onClick={ () => onClick(type) }>
        <img src={ likeImg } alt="rate img" className="RateButton-icon" />
      </button>
      <span className="RateButton-count">{ count }</span>
    </span>
  );
}

const RateButtons = ({ likes, dislikes, onClick }: RateButtonsProps) => {
  return (
    <span className="RateButtons">
      <RateButton type="like" count={ likes } onClick={ onClick } />
      <RateButton type="dislike" count={ dislikes } onClick={ onClick } />
    </span>
  );
};

export default RateButtons;
