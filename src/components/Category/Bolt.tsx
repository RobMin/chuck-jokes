import React from 'react';
import { Category } from './index.d';
import './styles.scss';

interface CategoryBoltProps {
  category: Category;
}

const CategoryBolt = ({ category }: CategoryBoltProps) => {
  return (
    <span className={ `Category-bolt Category-${ category }`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="currentColor">
        <path d="M7.756 6h-3.38L6.011.161C6.04.021 5.87-.06 5.787.055L.048 7.581C-.07 7.756.042 8 .245 8h3.38L1.99 13.839c-.029.14.143.222.224.106l5.74-7.523C8.067 6.244 7.958 6 7.755 6z"/>
      </svg>
    </span>
  );
};

export default CategoryBolt;
