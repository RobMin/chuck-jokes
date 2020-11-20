import React from 'react';
import { knownCategories } from '../../constants';
import './styles.scss';

export type Category = keyof typeof knownCategories;
interface CategoryTagProps {
  category: Category;
  withDot?: true
}

const CategoryTag = ({ category, withDot }: CategoryTagProps) => {
  return (
    <div className={ `Category-tag Category-${ category }` }>
      { withDot && <span className="Category-tag-dot" /> }
      { knownCategories[category] }
    </div>
  );
};

export default CategoryTag;
