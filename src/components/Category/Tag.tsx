import React from 'react';
import { Category } from './index.d';
import { knownCategories } from '../../constants';
import './styles.scss';

interface CategoryTagProps {
  category: Category;
  withDot?: true;
  customClasses?: string;
}

const CategoryTag = ({ category, withDot, customClasses }: CategoryTagProps) => {
  return (
    <span className={ `Category-tag Category-${ category } ${ customClasses || '' }` }>
      { withDot && <span className="Category-tag-dot" /> }
      { knownCategories[category] }s
    </span>
  );
};

export default CategoryTag;
