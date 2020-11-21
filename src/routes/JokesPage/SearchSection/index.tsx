import React, { useCallback, useEffect, useRef, useState } from 'react';
import backgroundImage from 'assets/search_section_image.jpg';
import searchIcon from 'assets/icons/search_icon.svg';
import whiteLoading from 'assets/icons/white_loading.svg';
import { JokeWithIdx } from '../helpers';
import CategoryBolt from 'components/Category/Bolt';
import { knownCategories } from '../../../constants';
import useOutClick from 'hooks/useOutClick';
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
  const [ blockDropdown, setBlockDropdown ] = useState(true);
  const [ localLoading, setLocalLoading ] = useState(false);
  const [ input, setInput ] = useState(query);
  useEffect(() => {
    const changeQuery = () => {
      setLocalLoading(false);
      if (query !== input) {
        setQuery(input);
        setBlockDropdown(false);
      }
    };

    setLocalLoading(true);
    const timeoutId = setTimeout(changeQuery, 1000);
    return () => clearTimeout(timeoutId);
  }, [ input, query, setQuery, setShow ]);

  useEffect(() => {
    setShow(true);
  }, [ jokesWithIdx, setShow ]);

  const searchRef = useRef(null);
  const closeDropdown = useCallback(
    () => setShow(false),
    [ setShow ],
  );
  useOutClick(searchRef, closeDropdown);

  return (
    <section style={{ backgroundImage: `url(${ backgroundImage })` }} className="SearchSection">
      <h4 className="SearchSection-title">The Joke Bible</h4>
      <h6 className="SearchSection-subtitle">Daily Laughs for you and yours</h6>
      <div className="SearchSection-search-wrapper" ref={ searchRef }>
        <input
          type="text"
          className="SearchSection-search"
          placeholder="How can we make you laugh today?"
          value={ input }
          onChange={ (e) => e.target.value.length < 300 && setInput(e.target.value) }
        />
        <span className="SearchSection-search-icon-wrapper">
          { (loading || localLoading)
            ? <img alt="loading" src={ whiteLoading } className="SearchSection-search-loading-icon"/>
            : <img alt="search icon" src={ searchIcon } className="SearchSection-search-icon"/>
          }
        </span>
        { !blockDropdown && show && !!jokesWithIdx.length && (
          <div className="SearchSection-search-dropdown-wrapper">
            { jokesWithIdx.map((jokesWithIdx, i) => {
              const cat = jokesWithIdx.joke.categories[0];
              const val = jokesWithIdx.joke.value;
              return (
                  <button key={ i } className="SearchSection-search-dropdown-item" onClick={ () => { selectJoke(jokesWithIdx); setShow(false); } }>
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
