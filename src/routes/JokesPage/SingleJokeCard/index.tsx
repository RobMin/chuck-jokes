import React from 'react';
import { Joke } from '..';
import CategoryTag from 'components/Category/Tag';
import { Category } from 'components/Category/index.d';
import { knownCategories } from '../../../constants';
import './styles.scss';

interface SingleJokeSectionProps {
  joke: Joke;
}

const SingleJokeCard = ({ joke }: SingleJokeSectionProps) => {
  return (
    <div className="SingleJokeCard">
      <div className="SingleJokeCard-head">
        { joke.categories && joke.categories.map((cat, i) => (
          <CategoryTag key={ i } withDot category={ cat as Category } />
        )) }
      </div>
        { joke.categories && (
          <h5 className="SingleJokeCard-title">{ knownCategories[joke.categories[0]] }</h5>
        ) }
        <p className="SingleJokeCard-joke">{ joke.value }</p>
    </div>
  );
};

export default SingleJokeCard;
