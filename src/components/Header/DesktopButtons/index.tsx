import React, { useCallback, useRef, useState } from 'react';
import arrowDown from 'assets/icons/arrow_down.svg';
import human from 'assets/icons/human.svg';
import useFade from 'hooks/useFade';
import useOutClick from 'hooks/useOutClick';
import { dropdownButtons } from '..';
import './styles.scss';

const DesktopButtons = () => {
  const dropdownButtonRef = useRef(null);
  const [ show, setShow ] = useState(false);
  const closeDropdown = useCallback(
    () => setShow(false),
    [ setShow ],
  );
  useOutClick(dropdownButtonRef, closeDropdown);

  const fadeClasses = useFade(show);
  return (
    <div className="DesktopButtons-wrapper">
      <button className="DesktopButtons-button">SO FUNKTIONIERT’S</button>
      <button className="DesktopButtons-button">SONDERANGEBOTE</button>
      <div className="DesktopButtons-dropdown-button" onClick={ () => setShow(!show) } ref={ dropdownButtonRef }>
        <img alt="human" src={ human } className="DesktopButtons-dropdown-human"/>
        MEIN BEREICH
        <img alt="arrow" src={ arrowDown } className="DesktopButtons-dropdown-arrow"/>
        <div className={ `DesktopButtons-dropdown-wrapper ${ fadeClasses }` }>
          { dropdownButtons.map((button, i) => (
            <a key={ i } href="#" className={ `DesktopButtons-dropdown-item ${ button.classes || '' }` }>
              { button.title }
            </a>
          )) }
        </div>
      </div>
    </div>
  );
};

export default DesktopButtons;
