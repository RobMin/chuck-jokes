import React from 'react';
import { knownCategories } from '../../constants';
import './styles.scss';

export type Category = keyof typeof knownCategories;
interface CategoryTagProps {
  category: Category;
  onClick: () => any;
}

const CategoryButton = ({ category, onClick }: CategoryTagProps) => {
  return (
    <button onClick={ onClick } className={ `Category-button Category-${ category }` }>
      <span className="Category-button-text">{ knownCategories[category] }</span>
    </button>
  );
};

export default CategoryButton;
