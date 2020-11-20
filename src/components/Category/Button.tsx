import React from 'react';
import { knownCategories } from '../../constants';
import './styles.scss';

export type Category = keyof typeof knownCategories;
interface CategoryButtonProps {
  category: Category;
  onClick: () => any;
}

const CategoryButton = ({ category, onClick }: CategoryButtonProps) => {
  return (
    <button onClick={ onClick } className={ `Category-button Category-${ category }` }>
      <span className="Category-button-text">{ `${ knownCategories[category] }s` }</span>
    </button>
  );
};

export default CategoryButton;
