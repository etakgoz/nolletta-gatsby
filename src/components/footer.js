import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby'
import twitterIcon from '../img/twitter-icon.svg'
import linkedinIcon from '../img/linkedin-icon.svg'
import githubIcon from '../img/github-icon.svg'

const Separator = (props) => {
  return (
    <span>&#47;</span>
  );
};

const Footer = (props) => {
  return (
    <Container>
        <footer>
            <div class="nav-links col-md-4 offset-md-4">
                <Link to="/">Home</Link>
                <Separator/>
                <Link to="/projects">Projects</Link>
                <Separator/>
                <Link to="/about">About</Link>         
            </div>
            <div class="social-links col-md-4 offset-md-4">
                <a href="https://twitter.com/etakgoz" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="https://linkedin.com/in/etakgoz" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="Linkedin" />
                </a>
                <a href="https://github/user/etakgoz" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="Github" />                 
                </a>
            </div>

            <div class="footer-text">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </footer>
    </Container>
  );
}

export default Footer;