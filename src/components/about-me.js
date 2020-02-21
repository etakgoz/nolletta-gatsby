import React from 'react';
import { Container, Row } from 'react-bootstrap';
import profilePhoto from '../img/profile-photo.png';

const AboutMe = (props) => {
  return (
    <Container>
        <section>
            <Row>
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div className="about-me">
                        <figure>
                            <img className="profile-photo" src={profilePhoto} alt="E. Tolga Akgöz"/>
                        </figure>
                        <div>
                            <p>Nolletta is the digital home of <strong>Tolga Akgoz</strong>.<br/>I am an engineer interested in web, ai, design, investing and bunch of other things. Click here to learn more about me.</p>
                        </div>
                    </div>
                </div>
            </Row>
        </section>
    </Container>
  );
}

export default AboutMe;