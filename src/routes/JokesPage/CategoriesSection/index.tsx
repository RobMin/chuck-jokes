import React, { useEffect, useState } from 'react';
import CategoryButton from 'components/Category/Button';
import { Category } from 'components/Category/index.d';
import arrowDown from 'assets/icons/tailed_arrow_down.svg';
import './styles.scss';
import Button from 'components/Button';

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
        <CategoryButton key={ i } onClick={ () => onCategoryChange(cat) } category={ cat as Category } customClasses="m-auto" />
      )) }
      { categories.length > 7 && !showAll && (
        <Button type="big" iconPosition="right" icon={ arrowDown } onClick={ () => setShowAll(true) } customClasses="m-auto">
          View all
        </Button>
      ) }
    </div>
  );
};

export default CategoriesSection;
