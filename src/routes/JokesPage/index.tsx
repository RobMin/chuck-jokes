import React, { useState } from 'react';
import SearchSection from '../../components/SearchSection';
// import './styles.scss';

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories?: Array<string>;
}

interface CategorizedJokes {
  [ category: string ]: Array<Joke>;
}

const addTo = (obj: CategorizedJokes, joke: Joke, category = 'uncategorized') => {
  if (!obj[category]) {
    return obj[category] = [ joke ];
  }
  obj[category].push(joke);
};

const addToCategories = (obj: CategorizedJokes, joke: Joke) => {
  if (!joke?.categories?.length) {
    addTo(obj, joke);
    return obj;
  }
  joke.categories.forEach((category) => addTo(obj, joke, category));
  return obj;
};

const JokesPage = () => {
  const [ active, setActive ] = useState<Joke>();
  const [ jokes, setJokes ] = useState<CategorizedJokes>();
  const [ error, setError ] = useState<string>();

  const categorizeJokes = (jokes: Array<Joke>) => {
    const categorizedJokes = jokes.reduce(addToCategories, {});
    setJokes(categorizedJokes);
  };

  return (<>
    <SearchSection categorizeJokes={ categorizeJokes } setError={ setError } />
  </>);
};

export default JokesPage;
