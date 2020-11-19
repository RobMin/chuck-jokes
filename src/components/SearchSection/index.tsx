import React, { useState } from 'react';
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

  const search = async (e: any) => {
    e.preventDefault();
    try {
      const res = await searchJokes(input);
      categorizeJokes(res);
    } catch(e) {
      setError(e.message);
    }
  };

  return (
    <section style={{ backgroundImage: `url(${ backgroundImage })` }} className="SearchSection">
      <h4 className="SearchSection-title">The Joke Bible</h4>
      <h6 className="SearchSection-subtitle">Daily Laughs for you and yours</h6>
      <form className="SearchSection-search-wrapper" onSubmit={ search }>
        <input
          type="text"
          className="SearchSection-search"
          placeholder="How can we make you laugh today?"
          value={ input }
          onChange={ (e) => e.target.value.length < 300 && setInput(e.target.value) }
        />
        <button type="submit" className="SearchSection-search-icon-wrapper">
          <img alt="search icon" src={ searchIcon } className="SearchSection-search-icon"/>
        </button>
      </form>
    </section>
  );
};

export default SearchSection;
