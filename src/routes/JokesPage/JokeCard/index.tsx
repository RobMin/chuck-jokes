import React from 'react';
import { Joke } from '..';
import { knownCategories } from '../../../constants';
import Button from 'components/Button';
import arrowRight from 'assets/icons/tailed_arrow_right.svg';
import CategoryBolt from 'components/Category/Bolt';
import './styles.scss';

interface JokeCardProps {
  joke: Joke;
  onClick: () => any;
}

const JokeCard = ({ joke, onClick }: JokeCardProps) => {
  return (
    <div className="JokeCard">
      <div className="JokeCard-head">
        <CategoryBolt category={ joke.categories[0] } />
        <h6 className="JokeCard-title">{ knownCategories[joke.categories[0]] }</h6>
      </div>
      <p className="JokeCard-joke">{ joke.value }</p>
      <div className="JokeCard-buttons">
        <Button iconPosition="right" icon={ arrowRight } onClick={ onClick } border="none">
          See stats
        </Button>
      </div>
    </div>
  );
};

export default JokeCard;
