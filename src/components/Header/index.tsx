import React from 'react';
import logo from 'assets/logo.svg';
import './styles.scss';
import useIsDesktop from 'hooks/useIsDesktop';
import DesktopButtons from './DesktopButtons';
import MobileMenu from './MobileMenu';

export const dropdownButtons = [
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
    classes: 'special',
    title: 'Publish new joke',
    href: ''
  }
];

const Header = () => {
  const isDesktop = useIsDesktop();
  return (
    <header className="Header-wrapper">
      <div className="Header">
        <div className="Header-logo-wrapper">
          <img alt="logo" src={ logo } className="Header-logo"/>
        </div>

        { isDesktop
          ? <DesktopButtons />
          : <MobileMenu />
        }

      </div>
    </header>
  );
};

export default Header;
