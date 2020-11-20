import React, { useState } from 'react';
import { Category } from '../../components/Category/Tag';
import SearchSection from '../../components/SearchSection';
import SingleJokeSection from '../../components/SingleJokeSection';
import { JokeSearchData } from '../../hooks/useChuckApi';
// import './styles.scss';

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories?: Array<Category>;
}

interface CategorizedJokes {
  [ category: string ]: Array<Joke>;
}

const addTo = (obj: CategorizedJokes, joke: Joke, category: string) => {
  if (!obj[category]) {
    return obj[category] = [ joke ];
  }
  obj[category].push(joke);
};

const addToCategories = (obj: CategorizedJokes, joke: Joke) => {
  if (!joke?.categories?.length) {
    joke.categories = [ 'uncategorized' ];
  }
  joke.categories.forEach((category) => addTo(obj, joke, category));
  return obj;
};

const JokesPage = () => {
  const [ active, setActive ] = useState<Joke | null>(null);
  const [ jokes, setJokes ] = useState<CategorizedJokes>();
  const [ jokesCount, setJokesCount ] = useState(0);
  const [ error, setError ] = useState<string>();

  const categorizeJokes = ({ result, total }: JokeSearchData) => {
    const categorizedJokes = result.reduce(addToCategories, {});
    setJokes(categorizedJokes);
    setActive(total === 1 ? result[0] : null);
  };

  return (<>
    <SearchSection categorizeJokes={ categorizeJokes } setError={ setError } />
    { active && <SingleJokeSection exitSingleJokeSection={ () => setActive(null) } joke={ active } /> }
  </>);
};

export default JokesPage;
