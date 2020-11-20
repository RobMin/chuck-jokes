import React, { Fragment, useState } from 'react';
import logo from 'assets/logo.svg';
import arrowDown from 'assets/icons/arrow_down.svg';
import human from 'assets/icons/human.svg';
import './styles.scss';

const dropdownButtons = [
  {
    title: 'My published jokes',
    href: ''
  },
  {
    title: 'My saved jokes',
    href: ''
  },
  {
    title: 'Account Information',
    href: ''
  },
  {
    classes: 'Header-dropdown-item-special',
    title: 'Publish new joke',
    href: ''
  }
];

const Header = () => {
  const [ show, setShow ] = useState(false);

  return (
    <header className="Header-wrapper">
      <div className="Header">
        <div className="Header-logo-wrapper">
          <img alt="logo" src={ logo } className="Header-logo"/>
        </div>

        <div className="Header-buttons-wrapper">
          <button className="Header-button">SO FUNKTIONIERT’S</button>
          <button className="Header-button">SONDERANGEBOTE</button>
          <div className="Header-dropdown-button" onClick={ () => setShow(!show) }>
            <img alt="arrow" src={ human } className="Header-dropdown-human"/>
            MEIN BEREICH
            <img alt="human" src={ arrowDown } className="Header-dropdown-arrow"/>
            { show && (
              <div className="Header-dropdown-wrapper">
                <div className="Header-dropdown-wrapper-arrow"/>
                { dropdownButtons.map((button, i) => (<Fragment key={ i }>
                  <button className={ `Header-dropdown-item ${ button.classes || '' }` }>
                    { button.title }
                  </button>
                  { i !== dropdownButtons.length - 1 &&
                    <div className="Header-dropdown-item-divider"/>
                  }
                </Fragment>)) }
              </div>
            ) }
          </div>
        </div>

        <div className="Header-buttons-wrapper-mobile">
          <button className="Header-mobile-menu-button">
            &#9776;
          </button>
          { /* TODO: add mobile menu */ }
        </div>

      </div>
    </header>
  );
};

export default Header;
