import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/search_section_image.jpg';
import searchIcon from '../../assets/icons/search_icon.svg';
import './styles.scss';
import useChuckApi, { JokeSearchData } from '../../hooks/useChuckApi';

interface SearchSectionProps {
  categorizeJokes: (res: JokeSearchData) => any;
  setError: (err: string) => void;
}

const SearchSection = ({ categorizeJokes, setError }: SearchSectionProps) => {
  const [ input, setInput ] = useState('');
  const { searchJokes } = useChuckApi();

  useEffect(() => {
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
  }, [input])

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
