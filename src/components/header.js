import React from 'react';
import logo from '../img/logo.svg'
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby'

const Separator = (props) => {
  return (
    <span>&#47;</span>
  );
};

const Header = (props) => {
  return (
    <Container>
      <nav className="navigation">
        <Link to="/" className="navbar-item logo">
          <figure className="image">
              <img src={logo} alt="Nolletta" style={{ width: '175px' }} />
          </figure>
        </Link>
        <div class="nav-links">
          <Link to="/">Home</Link>
          <Separator/>
          <Link to="/projects">Projects</Link>
          <Separator/>
          <Link to="/about">About</Link>         
        </div>
      </nav>
    </Container>
  );
}

export default Header;