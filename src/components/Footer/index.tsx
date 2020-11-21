import React from 'react';
import backgroundImage from 'assets/footer_background.jpg';
import Button from 'components/Button';
import arrowRight from 'assets/icons/tailed_arrow_right.svg';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="Footer" style={{ backgroundImage: `url(${ backgroundImage })` }}>
      <div className="Footer-content-wrapper">
        <span className="Footer-text">
          Got jokes? Get paid for submitting!
        </span>
        <Button iconPosition="right" icon={ arrowRight } border="none" backgroundColor="transparent" customClasses="Footer-button">
          Submit joke
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
