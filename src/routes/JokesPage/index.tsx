import React, { useEffect, useState } from 'react';
import CategoryTag from 'components/Category/Tag';
import { Category } from 'components/Category/index.d';
import useChuckApi from 'hooks/useChuckApi';
import CategoriesSection from './CategoriesSection';
import { addToCategories } from './helpers';
import SearchSection from './SearchSection';
import SingleJokeSection from './SingleJokeSection';
import './styles.scss';
import JokesSection from './JokesSection';
import { knownCategories } from '../../constants';

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories: Array<Category>;
  likes: number;
  dislikes: number;
}

export interface CategorizedJokes {
  [ category: string ]: Array<Joke>;
}

const JokesPage = () => {
  const [ activeIdx, setActiveIdx ] = useState(-1);
  const [ categorizedJokes, setCategorizedJokes ] = useState<CategorizedJokes>({});
  const [ availableCategories, setAvailableCategories ] = useState(Object.keys(knownCategories) as Array<Category>);
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
        setAvailableCategories(Object.keys(categorizedJokes) as Array<Category>);
        setActiveIdx(total === 1 ? 0 : -1);
      } catch(e) {
        setError(e.message);
      }
    };

    getJokes();
  }, [ setError, searchJokes, setCategorizedJokes, setActiveIdx, query ]);

  // Gets sure that if there are any jokes available, 'activeCategory' is not empty
  useEffect(() => {
    const availableCategories = Object.keys(categorizedJokes);
    if (!categorizedJokes[activeCategory] && availableCategories.length) {
      setActiveCategory(availableCategories[0] as Category);
    }
  }, [ setActiveCategory, activeCategory, categorizedJokes ]);

  const jokes = (categorizedJokes[activeCategory] || []) as Array<Joke>;
  const active = activeIdx === -1 ? null : jokes[activeIdx];
  return (<>
    <SearchSection query={ query } setQuery={ setQuery } />
    { active &&
      <SingleJokeSection
        nextJoke={ activeIdx === jokes.length - 1 ? null : () => setActiveIdx(activeIdx + 1) }
        prevJoke={ activeIdx === 0 ? null : () => setActiveIdx(activeIdx - 1) }
        exitSingleJokeSection={ () => setActiveIdx(-1) }
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
      <JokesSection jokes={ jokes } setActiveIdx={ setActiveIdx } />
    </> }
  </>);
};

export default JokesPage;
