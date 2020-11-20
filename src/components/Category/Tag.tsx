import React from 'react';
import { Category } from './index.d';
import { knownCategories } from '../../constants';
import './styles.scss';

interface CategoryTagProps {
  category: Category;
  withDot?: true
}

const CategoryTag = ({ category, withDot }: CategoryTagProps) => {
  return (
    <div className={ `Category-tag Category-${ category }` }>
      { withDot && <span className="Category-tag-dot" /> }
      { knownCategories[category] }s
    </div>
  );
};

export default CategoryTag;
