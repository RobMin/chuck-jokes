import React, { useEffect, useState } from 'react';
import backgroundImage from 'assets/search_section_image.jpg';
import whiteSearchIcon from 'assets/icons/white_search_icon.svg';
import whiteLoading from 'assets/icons/white_loading.svg';
import blackSearchIcon from 'assets/icons/black_search_icon.svg';
import blackLoading from 'assets/icons/black_loading.svg';
import { JokeWithIdx } from '../helpers';
import CategoryBolt from 'components/Category/Bolt';
import { knownCategories } from '../../../constants';
import useFade from 'hooks/useFade';
import './styles.scss';

interface SearchSectionProps {
  setQuery: (query: string) => void;
  jokesWithIdx: Array<JokeWithIdx>;
  selectJoke: (jokeWithIdx: JokeWithIdx) => void;
  query: string;
  loading: boolean;
}

const SearchSection = ({ setQuery, query, jokesWithIdx, selectJoke, loading }: SearchSectionProps) => {
  const [ show, setShow ] = useState(false);
  const [ localLoading, setLocalLoading ] = useState(false);
  const [ input, setInput ] = useState(query);
  useEffect(() => {
    const changeQuery = () => {
      setLocalLoading(false);
      if (query !== input) {
        setQuery(input);
      }
    };

    setLocalLoading(true);
    const timeoutId = setTimeout(changeQuery, 1000);
    return () => clearTimeout(timeoutId);
  }, [ input, query, setQuery ]);

  const handleJokeSelect = (jokeWithIdx: JokeWithIdx) => {
    if (!loading && !localLoading) {
      return;
    }

    selectJoke(jokeWithIdx);
    setShow(false);
  };

  const fadeClasses = useFade(show);
  return (
    <section style={{ backgroundImage: `url(${ backgroundImage })` }} className="SearchSection">
      <h4 className="SearchSection-title">The Joke Bible</h4>
      <h6 className="SearchSection-subtitle">Daily Laughs for you and yours</h6>
      <div className={ `SearchSection-search-wrapper ${ input.length ? 'active' : '' }` }>
        <input
          onFocus={ () => setShow(true) }
          onBlur={ () => setShow(false) }
          type="text"
          className="SearchSection-search"
          placeholder="How can we make you laugh today?"
          value={ input }
          onChange={ (e) => e.target.value.length < 300 && setInput(e.target.value) }
        />
        <span className="SearchSection-search-icon-wrapper">
          { (loading || localLoading)
            ? <img alt="loading" src={ input.length ? blackLoading : whiteLoading } />
            : <img alt="search icon" src={ input.length ? blackSearchIcon : whiteSearchIcon } className="SearchSection-search-icon" />
          }
        </span>
        { !!jokesWithIdx.length && (
          <div className={ `SearchSection-search-dropdown-wrapper ${ fadeClasses }` }>
            { jokesWithIdx.map((jokeWithIdx, i) => {
              const cat = jokeWithIdx.joke.categories[0];
              const val = jokeWithIdx.joke.value;
              return (
                  <button key={ i } className="SearchSection-search-dropdown-item" onClick={ () => handleJokeSelect( jokeWithIdx ) }>
                    <span className="SearchSection-search-dropdown-item-bolt">
                      <CategoryBolt category={ cat } />
                    </span>
                    <span className="SearchSection-search-dropdown-item-text">
                      { knownCategories[cat] }: { val }
                    </span>
                  </button>
              );
            }) }
          </div>
        ) }
      </div>
    </section>
  );
};

export default SearchSection;
