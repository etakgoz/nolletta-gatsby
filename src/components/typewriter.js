import React  from 'react';
import { Container } from 'react-bootstrap';

const MODE_WRITING = 0;
const MODE_WAITING = 1;
const MODE_ERASING = 2;
const KEYSTROKE_MS = 125;
const N_ITERATIONS_TO_WAIT = 3000 / KEYSTROKE_MS;

class Typewriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: MODE_WRITING,
      nextMode: MODE_ERASING,
      nWritten: 0,
      text: "",
      nIterationsToWait: N_ITERATIONS_TO_WAIT
    };
  }

  componentDidMount() {
    this.updateMessage();
  }

  updateMessage() {
    const { message } = this.props;
    const state = {...this.state};  

    if (state.mode === MODE_WRITING) {
      state.nWritten++;
      state.text = message.substring(0, state.nWritten);
    
      if (state.nWritten === message.length) {
        state.mode = MODE_WAITING;
        state.nextMode = MODE_ERASING;
      }
    } else if (state.mode === MODE_WAITING) {
      if (state.nIterationsToWait === 0) {
        state.mode = state.nextMode;
        state.nIterationsToWait = N_ITERATIONS_TO_WAIT;
      } else {
        state.nIterationsToWait--;
      }
    } else if (state.mode === MODE_ERASING) {
      state.nWritten--;
      state.text = message.substring(0, state.nWritten);

      if (state.nWritten === 0) {
        state.mode = MODE_WAITING;
        state.nextMode = MODE_WRITING;
      }
    }

    this.setState(state);
    window.setTimeout(() => {
      this.updateMessage()
    }, KEYSTROKE_MS);
  }

  render() {
    return(
      <Container className="typewriter">
        <h1 ref="message"> {this.state.text}<span className="caret">|</span></h1>
      </Container>
    );
  }
}

export default Typewriter;