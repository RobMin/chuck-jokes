import React, { useEffect, useMemo, useState } from 'react';
import CategoryTag from 'components/Category/Tag';
import { Category } from 'components/Category/index.d';
import useChuckApi from 'hooks/useChuckApi';
import CategoriesSection from './CategoriesSection';
import { addToCategories, getRandomJokePerRandomCategory, getRandomKey, JokeWithIdx } from './helpers';
import SearchSection from './SearchSection';
import SingleJokeSection from './SingleJokeSection';
import JokesSection from './JokesSection';
import { knownCategories } from '../../constants';
import arrowRight from 'assets/icons/tailed_arrow_right.svg';
import Button from 'components/Button';
import './styles.scss';

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

const knownCategoriesArr = Object.keys(knownCategories) as Array<Category>;
const JokesPage = () => {
  const [ activeIdx, setActiveIdx ] = useState(-1);
  const [ categorizedJokes, setCategorizedJokes ] = useState<CategorizedJokes>({});
  const [ availableCategories, setAvailableCategories ] = useState(knownCategoriesArr); // To prevent categories list rerenders
  const [ activeCategory, setActiveCategory ] = useState<Category>(getRandomKey(knownCategories) as Category);
  const [ loading, setLoading ] = useState(true);
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
      setLoading(false);
    };

    getJokes();
    setLoading(true);
  }, [ setError, searchJokes, setCategorizedJokes, setActiveIdx, query ]);

  // Gets sure that if there are any jokes available, 'activeCategory' is not empty
  useEffect(() => {
    const availableCategories = Object.keys(categorizedJokes);
    if (!categorizedJokes[activeCategory] && availableCategories.length) {
      setActiveCategory(getRandomKey(categorizedJokes) as Category);
    }
  }, [ setActiveCategory, activeCategory, categorizedJokes ]);

  const jokesWithIdx = useMemo(() =>
    getRandomJokePerRandomCategory(categorizedJokes)
  , [ categorizedJokes ]);

  const jokes = (categorizedJokes[activeCategory] || []) as Array<Joke>;
  const active = activeIdx === -1 ? null : jokes[activeIdx];
  const announceNeeded = error || !jokes.length;
  return (<>
    <SearchSection
      query={ query }
      setQuery={ setQuery }
      jokesWithIdx={ jokesWithIdx }
      selectJoke={ ({ idx, joke }: JokeWithIdx) => { setActiveIdx(idx); setActiveCategory(joke.categories[0]); } }
      loading={ loading }
    />
    { announceNeeded &&
      <div className="JokesPage-announce-wrapper">
        <Announce jokesCount={ jokes.length } query={ query } loading={ loading } />
      </div>
    }
    { !announceNeeded && active &&
      <SingleJokeSection
        nextJoke={ activeIdx === jokes.length - 1 ? null : () => setActiveIdx(activeIdx + 1) }
        prevJoke={ activeIdx === 0 ? null : () => setActiveIdx(activeIdx - 1) }
        rateJoke={ () => { /* TODO: add rate logic */ } }
        exitSingleJokeSection={ () => setActiveIdx(-1) }
        joke={ active }
      />
    }
    { !announceNeeded && !active && <>
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

const Announce = ({ query, jokesCount, loading }: any) => {
  if (loading) {
    return (
      <span className="JokesPage-loading">
        Loading...
      </span>
    );
  } else if (!jokesCount) {
    return (
      <span className="JokesPage-no-jokes">
        No Chuck Norris jokes were found for your search.<br/>
        It's your chance to add one!
        <Button iconPosition="right" icon={ arrowRight } backgroundColor="transparent" customClasses="JokesPage-add-joke-button">
          Submit joke
        </Button>
      </span>
    );
  }

  return (
    <span className="JokesPage-error">
      { (query.length < 3 || query.length > 300)
        ? <>
            Searches not between 3 and 300 characters are out of Chuck's guidance.
          </>
        : <>
            There was an error while getting Jokes.<br/>
            We hope Chuck won't get angry.
          </>
      }
    </span>
  );
};

export default JokesPage;
