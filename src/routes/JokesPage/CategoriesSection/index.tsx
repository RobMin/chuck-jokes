import React, { useEffect, useState } from 'react';
import CategoryButton from 'components/Category/Button';
import { Category } from 'components/Category/Tag';
import arrowDown from 'assets/icons/tailed_arrow_down.svg';
import './styles.scss';

interface CategoriesSectionProps {
  categories: Array<Category>;
  onCategoryChange: (category: Category) => void;
}

const CategoriesSection = ({ categories, onCategoryChange }: CategoriesSectionProps) => {
  const [ showAll, setShowAll ] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, [ setShowAll, categories ])

  return (
    <div className="CategoriesSection">
      { categories.slice(0, showAll ? Infinity : 7).map((cat, i) => (
        <CategoryButton key={ i } onClick={ () => onCategoryChange(cat) } category={ cat as Category } />
      )) }
      { categories.length > 7 && !showAll && (
        <button className="CategoriesSection-show-all-button" onClick={ () => setShowAll(true) }>
          <span className="CategoriesSection-show-all-button-placeholder" />
          <span className="CategoriesSection-show-all-button-text">View all</span>
          <img src={ arrowDown } alt="arrow down" className="CategoriesSection-show-all-button-arrow" />
        </button>
      ) }
    </div>
  );
};

export default CategoriesSection;
