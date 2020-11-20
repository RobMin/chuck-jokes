import React from 'react';
import { Joke } from '..';
import './styles.scss';
import JokeCard from '../JokeCard';

interface JokeCardProps {
  jokes: Array<Joke>;
  setActive: (joke: Joke) => void;
}

const JokesSection = ({ jokes, setActive }: JokeCardProps) => {
  console.log(jokes);
  return (
    <div className="JokesSection">
      { jokes.map(joke =>
        <JokeCard key={ joke.id } joke={ joke } onClick={ () => setActive(joke) } />
      ) }
    </div>
  );
};

export default JokesSection;
