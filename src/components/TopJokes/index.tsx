import React from 'react';
import './styles.scss';

const topJokes = [
  {
    title: 'Smoking Joke',
    href: '#'
  },
  {
    title: 'My Boss Joke',
    href: '#'
  },
  {
    title: 'Dirty Millionaire Joke',
    href: '#'
  },
  {
    title: 'The annoying neighbour',
    href: '#'
  },
  {
    title: 'Knock Knock',
    href: '#'
  },
  {
    title: 'Why Tyson lisps',
    href: '#'
  },
  {
    title: 'The drunk Police officer',
    href: '#'
  },
  {
    title: 'My hip dad (Dad joke)',
    href: '#'
  },
  {
    title: 'What not to say in an elevator',
    href: '#'
  }
];

const TopJokes = () => {
  return (
    <div className="TopJokesCard">
      <h6 className="TopJokesCard-title">
        The top 10 jokes this week
      </h6>
        { topJokes.map(({ title, href }, i) => (
          <a key={ i } href={ href } target="_blank" rel="noopener" className="TopJokesCard-item">{ title }</a>
        ) ) }
    </div>
  );
};

export default TopJokes;
