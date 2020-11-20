import React from 'react';
import { Joke } from '..';
import Button from 'components/Button';
import TopJokes from 'components/TopJokes';
import buttonCurve from 'assets/button_curve.png';
import arrowLeft from 'assets/icons/arrow_left_secondary.svg';
import arrowRight from 'assets/icons/arrow_right_secondary.svg';
import SingleJokeCard from '../SingleJokeCard';
import './styles.scss';

interface SingleJokeSectionProps {
  joke: Joke;
  exitSingleJokeSection: () => void;
  nextJoke?: () => any;
  prevJoke?: () => any;
}

const SingleJokeSection = ({ joke, exitSingleJokeSection, nextJoke, prevJoke }: SingleJokeSectionProps) => {
  return (<div className="SingleJokeSection">
    <div
      className="SingleJokeSection-back-button"
      style={{ backgroundImage: `url(${ buttonCurve })` }}
      onClick={ exitSingleJokeSection }
    >
      <img alt="arrow left" src={ arrowLeft } />
    </div>
    <section className="SingleJokeSection-content-wrapper">
      <article className="SingleJokeSection-joke-wrapper">
        <SingleJokeCard joke={ joke } />
        <div className="SingleJokeSection-joke-buttons-wrapper">
          <div className="SingleJokeSection-react-buttons">
          </div>
          <div className="SingleJokeSection-nav-buttons">
            { prevJoke && <Button onClick={ prevJoke } icon={ arrowLeft } iconPosition="left">Prev. joke</Button> }
            { nextJoke && <Button onClick={ nextJoke } icon={ arrowRight } iconPosition="right">Next joke</Button> }
          </div>
        </div>
      </article>
      <div className="SingleJokeSection-side-section-wrapper">
        <TopJokes />
      </div>
    </section>
  </div>);
};

export default SingleJokeSection;
