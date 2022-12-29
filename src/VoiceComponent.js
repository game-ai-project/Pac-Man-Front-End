import React, { Component } from "react";
import './App.css';


class VoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: true,
      lang: props.lang || "en-US",
      text:
        "How many Emo kids does it take to screw in a lightbulb?\nNone, they all sit in the dark and cry",
      autoPlay: false,
      isSpeeking: false
    };
  }
  componentWillMount() {
    if ("speechSynthesis" in window) {
      this._speech = new SpeechSynthesisUtterance();
      this._speech.onend = () => this.setState({ isSpeeking: false });
    } else {
      this.setState({ supported: false });
    }
  }

  componentDidMount() {
    if (this.state.supported && this.state.autoPlay) {
      this.speak();
    }
  }

  speak = () => {
    this._speech.text = this.state.text;
    this._speech.lang = this.state.lang;
    this.setState({ isSpeeking: true });
    window.speechSynthesis.speak(this._speech);
  };

  stop = () => {
    window.speechSynthesis.cancel();
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text, isSpeeking } = this.state;
    return (
      <div>
        <br />
        <button disabled={isSpeeking} onClick={this.speak}>
          Speak
        </button>
      </div>
    );
  }
}

export default VoiceComponent;
