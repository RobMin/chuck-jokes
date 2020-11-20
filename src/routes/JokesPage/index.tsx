import React, { useCallback, useEffect, useState } from 'react';
import { Category } from '../../components/Category/Tag';
import useChuckApi, { JokesResData } from '../../hooks/useChuckApi';
import CategoriesSection from './CategoriesSection';
import { addToCategories } from './helpers';
import SearchSection from './SearchSection';
import SingleJokeSection from './SingleJokeSection';

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories?: Array<Category>;
}

export interface CategorizedJokes {
  [ category: string ]: Array<Joke>;
}

const JokesPage = () => {
  const [ active, setActive ] = useState<Joke | null>(null);
  const [ categorizedJokes, setCategorizedJokes ] = useState<CategorizedJokes>({});
  const [ activeCategory, setActiveCategory ] = useState<Category>('dev');
  const [ error, setError ] = useState<string>();

  const categorizeJokes = useCallback(
    ({ result, total }: JokesResData) => {
      const categorizedJokes = result.reduce(addToCategories, {});
      setCategorizedJokes(categorizedJokes);
      setActive(total === 1 ? result[0] : null);
    }, [ setCategorizedJokes, setActive ]);

  const { getAllJokes } = useChuckApi();
  useEffect(() => {
    const getJokes = async () => {
      try {
        const res = await getAllJokes();
        categorizeJokes(res);
      } catch(e) {
        setError(e.message);
      }
    };

    getJokes();
  }, [ setError, categorizeJokes, getAllJokes ]);

  useEffect(() => {
    const availableCategories = Object.keys(categorizedJokes);
    if (!categorizedJokes[activeCategory] && availableCategories.length) {
      setActiveCategory(availableCategories[0] as Category);
    }
  }, [ categorizedJokes, activeCategory ]);

  const jokes = (categorizedJokes[activeCategory] || []) as Array<Joke>;
  const availableCategories = Object.keys(categorizedJokes) as Array<Category>;
  return (<>
    <SearchSection categorizeJokes={ categorizeJokes } setError={ setError } />
    { active &&
      <SingleJokeSection
        nextJoke={ () => {} }
        prevJoke={ () => {} }
        exitSingleJokeSection={ () => setActive(null) }
        joke={ active }
      />
    }
    { !active && !!jokes.length && <>
      <CategoriesSection categories={ availableCategories } />
    </> }
  </>);
};

export default JokesPage;
