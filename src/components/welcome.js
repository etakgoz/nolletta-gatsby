import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = (props) => {
  return (
    <Container className="welcome-msg-container">
        <h1>{props.message}</h1>
    </Container>
  );
}

export default Welcome;