import React from 'react';
import { Joke } from '../../routes/JokesPage';
import buttonCurve from '../../assets/button_curve.png';
import arrowLeft from '../../assets/icons/arrow_left.svg';
import './styles.scss';
import SingleJokeCard from '../SingleJokeCard';

interface SingleJokeSectionProps {
  joke: Joke;
  exitSingleJokeSection: () => void;
}

const SingleJokeSection = ({ joke, exitSingleJokeSection }: SingleJokeSectionProps) => {
  return (<section className="SingleJokeSection">
    <div
      className="SingleJokeSection-back-button"
      style={{ backgroundImage: `url(${ buttonCurve })` }}
      onClick={ exitSingleJokeSection }
    >
      <img src={ arrowLeft } />
    </div>
    <div>
      <SingleJokeCard joke={ joke } />
    </div>
  </section>);
};

export default SingleJokeSection;
