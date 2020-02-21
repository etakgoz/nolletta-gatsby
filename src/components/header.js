import React from 'react';
import logo from '../img/logo.svg';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

const Separator = (props) => {
  return (
    <span>&#47;</span>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuCollapsed: true
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      isMenuCollapsed: !prevState.isMenuCollapsed
    }));
  }



  render() {
    const hamburgerClass = this.state.isMenuCollapsed ? "hamburger hamburger--spin" : "hamburger hamburger--spin is-active";

    return (
      <Container>
        <nav className="navigation">
          <Link to="/" className="navbar-item logo">
              <img src={logo} alt="Nolletta" style={{ width: '175px' }} />
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Separator/>
            <Link to="/projects">Projects</Link>
            <Separator/>
            <Link to="/about">About</Link>         
          </div>
          <button className={hamburgerClass} type="button" onClick={this.toggleMobileMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>  
        </nav>
      </Container>
    );
  }

};

export default Header;