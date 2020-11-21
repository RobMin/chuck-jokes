import React from 'react';
import { Category } from './index.d';
import { knownCategories } from '../../constants';
import './styles.scss';

interface CategoryButtonProps {
  category: Category;
  onClick: () => any;
  customClasses?: string;
}

const CategoryButton = ({ category, onClick, customClasses }: CategoryButtonProps) => {
  return (
    <button onClick={ onClick } className={ `Category-button Category-${ category } ${ customClasses || '' }` }>
      <span className="Category-button-text">{ knownCategories[category] }s</span>
    </button>
  );
};

export default CategoryButton;
