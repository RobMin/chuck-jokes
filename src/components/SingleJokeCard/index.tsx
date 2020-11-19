import React from 'react';
import { knownCategories } from '../../constants';
import { Joke } from '../../routes/JokesPage';
import CategoryTag from '../Category/Tag';
import './styles.scss';

interface SingleJokeSectionProps {
  joke: Joke;
}

const SingleJokeCard = ({ joke }: SingleJokeSectionProps) => {
  return (
    <div className="SingleJokeCard">
      <div className="SingleJokeCard-head">
        { joke.categories && <CategoryTag category={ joke.categories[0] } /> }
      </div>
        { joke.categories && (
          <h5 className="SingleJokeCard-title">{ knownCategories[joke.categories[0]] }</h5>
        ) }
        <p className="SingleJokeCard-joke">{ joke.value }</p>
    </div>
  );
};

export default SingleJokeCard;
