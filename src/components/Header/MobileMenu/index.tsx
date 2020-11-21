import React, { useRef, useState } from 'react';
import human from 'assets/icons/human.svg';
import { dropdownButtons } from '..';
import './styles.scss';

const MobileMenu = () => {
  const menuRef = useRef(null);
  const [ show, setShow ] = useState(false);

  const handleWrapperClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };

  const activeClass = show ? 'active' : '';
  return (<>
    <div className="MobileMenu-open-button-wrapper">
      <button className="MobileMenu-open-button" onClick={ () => setShow(true) }>
        &#9776;
      </button>
    </div>
    <div className={ `MobileMenu-menu-wrapper ${ activeClass }` } ref={ menuRef } onClick={ handleWrapperClick }>
      <div className={ `MobileMenu-menu ${ activeClass }` }>
        <button className="MobileMenu-button">SO FUNKTIONIERT’S</button>
        <button className="MobileMenu-button">SONDERANGEBOTE</button>
        <div className="MobileMenu-group-title">
          <img alt="human" src={ human } className="MobileMenu-human"/>
          MEIN BEREICH
          <span/>
        </div>
        { dropdownButtons.map((button, i) => (
          <a key={ i } href="#" className={ `MobileMenu-group-button ${ button.classes || '' }` }>
            { button.title }
          </a>
        )) }
      </div>
    </div>
  </>);
};

export default MobileMenu;
