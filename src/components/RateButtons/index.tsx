import React from 'react';
import likeImg from 'assets/icons/like.svg';
import './styles.scss';

type RateType = 'like' | 'dislike';
interface RateButtonsProps {
  likes: number;
  dislikes: number;
}

interface RateButtonProps {
  type: RateType;
  count: number;
}

const RateButton = ({ type, count }: RateButtonProps) => {
  return (
    <span className={ `RateButton RateButton-${ type }` }>
      <span className="RateButton-icon-wrapper">
        <img src={ likeImg } className="RateButton-icon" />
      </span>
      <span className="RateButton-count">{ count }</span>
    </span>
  );
}

const RateButtons = ({ likes, dislikes }: RateButtonsProps) => {
  return (
    <span className="RateButtons">
      <RateButton type="like" count={ likes } />
      <RateButton type="dislike" count={ dislikes } />
    </span>
  );
};

export default RateButtons;
