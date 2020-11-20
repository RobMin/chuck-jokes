import React, { useEffect, useState } from 'react';
import { Joke } from '..';
import JokeCard from '../JokeCard';
import Button from 'components/Button';
import arrowDown from 'assets/icons/tailed_arrow_down.svg';
import './styles.scss';

interface JokeCardProps {
  jokes: Array<Joke>;
  setActiveIdx: (idx: number) => void;
}

const JokesSection = ({ jokes, setActiveIdx }: JokeCardProps) => {
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [ setPage, jokes ])

  return (
    <div className="JokesSection">
      <div className="JokesSection-grid">
        { jokes.slice(0, page * 9).map((joke, i) =>
          <JokeCard key={ joke.id } joke={ joke } onClick={ () => setActiveIdx(i) } />
        ) }
      </div>
      { jokes.length > page * 9 && (
        <div className="JokesSection-more-button-wrapper">
          <Button type="big" iconPosition="right" icon={ arrowDown } onClick={ () => setPage(page + 1) }>
            View more
          </Button>
        </div>
      ) }
    </div>
  );
};

export default JokesSection;
