import React from 'react';
import './styles.scss';

interface RatingTagProps {
  likes: number;
  dislikes: number;
}

const getLabelAndColor = (likes: number, dislikes: number) => {
  let label = 'Hall of fame';
  let color = '#f33636';
  if (likes < dislikes) {
    label = 'Chestnut';
    color = '#000';
  } else if (likes <= 50) {
    label = 'New in town';
    color = '#36aef3';
  } else if (likes <= 100) {
    label = 'trending';
    color = '#f3a536';
  }

  return { label, color };
};

const RatingTag = ({ likes, dislikes }: RatingTagProps) => {
  const { label, color } = getLabelAndColor(likes, dislikes);
  return (
    <span className="RatingTag" style={{ color }}>
      <span className="RatingTag-dot" style={{ backgroundColor: color }} />
      { label }
    </span>
  );
};

export default RatingTag;
