import React, { useEffect, useState } from 'react';
import CategoryTag, { Category } from 'components/Category/Tag';
import useChuckApi from 'hooks/useChuckApi';
import CategoriesSection from './CategoriesSection';
import { addToCategories } from './helpers';
import SearchSection from './SearchSection';
import SingleJokeSection from './SingleJokeSection';
import './styles.scss';
import JokesSection from './JokesSection';

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories: Array<Category>;
}

export interface CategorizedJokes {
  [ category: string ]: Array<Joke>;
}

const JokesPage = () => {
  const [ active, setActive ] = useState<Joke | null>(null);
  const [ categorizedJokes, setCategorizedJokes ] = useState<CategorizedJokes>({});
  const [ activeCategory, setActiveCategory ] = useState<Category>('dev');
  const [ error, setError ] = useState<string>();

  const { searchJokes } = useChuckApi();
  const [ query, setQuery ] = useState<string>('');
  useEffect(() => {
    const getJokes = async () => {
      try {
        const { result, total } = await searchJokes(query || 'all');
        const categorizedJokes = result.reduce(addToCategories, {});
        setCategorizedJokes(categorizedJokes);
        setActive(total === 1 ? result[0] : null);
      } catch(e) {
        setError(e.message);
      }
    };

    getJokes();
  }, [ setError, searchJokes, setCategorizedJokes, setActive, query ]);

  // Gets sure that if there are any jokes available, 'activeCategory' is not empty
  useEffect(() => {
    const availableCategories = Object.keys(categorizedJokes);
    if (!categorizedJokes[activeCategory] && availableCategories.length) {
      setActiveCategory(availableCategories[0] as Category);
    }
  }, [ setActiveCategory, activeCategory, categorizedJokes ]);

  const jokes = (categorizedJokes[activeCategory] || []) as Array<Joke>;
  const availableCategories = Object.keys(categorizedJokes) as Array<Category>;
  return (<>
    <SearchSection query={ query } setQuery={ setQuery } />
    { active &&
      <SingleJokeSection
        nextJoke={ () => {} }
        prevJoke={ () => {} }
        exitSingleJokeSection={ () => setActive(null) }
        joke={ active }
      />
    }
    { !active && !!jokes.length && <>
      <CategoriesSection
        categories={ availableCategories }
        onCategoryChange={ (cat: Category) => setActiveCategory(cat) }
      />
      <div className="JokesPage-tag-display-section">
        <CategoryTag category={ activeCategory } />
      </div>
      <JokesSection jokes={ jokes } setActive={ setActive } />
    </> }
  </>);
};

export default JokesPage;
