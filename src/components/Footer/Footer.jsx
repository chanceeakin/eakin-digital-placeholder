import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <p className="footer__text">© 2020 Eakin Digital Holdings, LLC</p>
      </Container>
    </footer>
  );
};

export default Footer;
