import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from 'assets/search_section_image.jpg';
import searchIcon from 'assets/icons/search_icon.svg';
import useChuckApi, { JokesResData } from 'hooks/useChuckApi';
import './styles.scss';

interface SearchSectionProps {
  categorizeJokes: (res: JokesResData) => any;
  setError: (err: string) => void;
}

const SearchSection = ({ categorizeJokes, setError }: SearchSectionProps) => {
  const [ input, setInput ] = useState('');
  const { searchJokes } = useChuckApi();

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const search = async () => {
      try {
        const res = await searchJokes(input);
        categorizeJokes(res);
      } catch(e) {
        setError(e.message);
      }
    };

    const timeoutId = setTimeout(search, 1000);
    return () => clearTimeout(timeoutId);
  }, [ input, setError, searchJokes, categorizeJokes ])

  return (
    <section style={{ backgroundImage: `url(${ backgroundImage })` }} className="SearchSection">
      <h4 className="SearchSection-title">The Joke Bible</h4>
      <h6 className="SearchSection-subtitle">Daily Laughs for you and yours</h6>
      <div className="SearchSection-search-wrapper">
        <input
          type="text"
          className="SearchSection-search"
          placeholder="How can we make you laugh today?"
          value={ input }
          onChange={ (e) => e.target.value.length < 300 && setInput(e.target.value) }
        />
        <span className="SearchSection-search-icon-wrapper">
          <img alt="search icon" src={ searchIcon } className="SearchSection-search-icon"/>
        </span>
      </div>
    </section>
  );
};

export default SearchSection;
